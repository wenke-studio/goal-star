import { env } from "$env/dynamic/private";
import type { User } from "svelte-clerk/server";
import { buildClerkProps } from "svelte-clerk/server";
import type { LayoutServerLoad } from "./$types";

const appName = "goalStar";

const isOnboarding = (user: User | null): boolean => {
  if (!user) return false;

  const { goalStar } = user.privateMetadata as App.PrivateMetadata;
  return !!(goalStar && goalStar.onboarding === "complete");
};

const onboarding = async (token: string) => {
  const res = await fetch(`${env.API_SERVICE_URL}/api/user/onboarding`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({ appName })
  });

  if (!res.ok) console.error(await res.text());
};

export const load: LayoutServerLoad = async ({ locals }) => {
  const currentUser = await locals.currentUser();

  if (!isOnboarding(currentUser)) {
    const { getToken } = locals.auth();
    const token = await getToken();
    await onboarding(token!);
  }

  return {
    ...buildClerkProps(locals.auth())
  };
};
