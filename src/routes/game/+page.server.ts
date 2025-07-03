import { env } from "$env/dynamic/private";
import { error } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

interface Goal {
  title: string;
  description: string;
  deadline: string;
  friendEmail: string;
}

interface ApiResponse<T> {
  item?: T;
}

interface ActionResult {
  success?: boolean;
  error?: string;
  goal?: Goal;
}

const EMPTY_GOAL: Goal = {
  title: "",
  description: "",
  deadline: "",
  friendEmail: ""
};

const ACTIVE_GOAL_ERROR = "當前任務啟用中，無法建立新目標";

class GoalService {
  constructor(private token: string) {}

  async getCurrentGoal(): Promise<{ goal: Goal; hasActiveGoal: boolean }> {
    try {
      const response = await fetch(`${env.API_SERVICE_URL}/api/goal/current`, {
        headers: { Authorization: `Bearer ${this.token}` }
      });

      if (response.status === 404) {
        return { goal: EMPTY_GOAL, hasActiveGoal: false };
      }

      if (!response.ok) {
        error(response.status, `Failed to load goal: ${response.statusText}`);
      }

      const data: ApiResponse<Goal> = await response.json();
      return {
        goal: data.item || EMPTY_GOAL,
        hasActiveGoal: true
      };
    } catch (err) {
      return { goal: EMPTY_GOAL, hasActiveGoal: false };
    }
  }

  async createGoal(goalData: Goal): Promise<ActionResult> {
    try {
      const response = await fetch(`${env.API_SERVICE_URL}/api/goal`, {
        method: "POST",
        headers: { Authorization: `Bearer ${this.token}` },
        body: JSON.stringify(goalData)
      });

      if (response.status === 409) {
        return { error: ACTIVE_GOAL_ERROR };
      }

      if (!response.ok) {
        error(response.status, `Failed to create goal: ${response.statusText}`);
      }

      const result = await response.json();
      return { success: true, goal: result };
    } catch (err) {
      error(500, "Failed to create goal");
    }
  }

  async deleteGoal(): Promise<ActionResult> {
    try {
      const response = await fetch(`${env.API_SERVICE_URL}/api/goal/current`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${this.token}` }
      });

      if (response.status === 404) {
        return { error: "沒有找到活躍目標" };
      }

      if (!response.ok) {
        error(response.status, `Failed to delete goal: ${response.statusText}`);
      }

      return { success: true };
    } catch (err) {
      error(500, "Failed to delete goal");
    }
  }
}

function validateFormData(formData: FormData): Goal {
  return {
    title: formData.get("title")?.toString().trim() || "",
    description: formData.get("description")?.toString().trim() || "",
    deadline: formData.get("deadline")?.toString() || "",
    friendEmail: formData.get("friendEmail")?.toString().trim() || ""
  };
}

async function ensureAuthenticated(locals: App.Locals): Promise<string> {
  const { getToken } = locals.auth();
  const token = await getToken();
  if (!token) error(401, "Unauthorized");
  return token;
}

export const load: PageServerLoad = async ({ locals }) => {
  const token = await ensureAuthenticated(locals);
  const goalService = new GoalService(token);
  return await goalService.getCurrentGoal();
};

export const actions: Actions = {
  create: async ({ locals, request }) => {
    const token = await ensureAuthenticated(locals);
    const goalService = new GoalService(token);

    const formData = await request.formData();
    const goalData = validateFormData(formData);

    return await goalService.createGoal(goalData);
  },

  delete: async ({ locals }) => {
    const token = await ensureAuthenticated(locals);
    const goalService = new GoalService(token);

    return await goalService.deleteGoal();
  }
};
