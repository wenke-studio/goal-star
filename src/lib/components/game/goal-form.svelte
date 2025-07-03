<script lang="ts">
  import { Button } from "$lib/components/shadcn/button";
  import { Input } from "$lib/components/shadcn/input";
  import { Label } from "$lib/components/shadcn/label";
  import { Textarea } from "$lib/components/shadcn/textarea";

  interface GoalFormData {
    name: string;
    description: string;
    deadline: string;
    friendEmail: string;
  }

  let formData: GoalFormData = $state({
    name: "",
    description: "",
    deadline: "",
    friendEmail: ""
  });

  let isSubmitting = $state(false);

  function handleSubmit() {
    isSubmitting = true;
    
    if (!formData.name || !formData.description || !formData.deadline || !formData.friendEmail) {
      alert("請填寫所有必要欄位");
      isSubmitting = false;
      return;
    }

    setTimeout(() => {
      console.log("Goal created:", formData);
      alert("目標設定成功！邀請已發送給你的好友。");
      
      formData = {
        name: "",
        description: "",
        deadline: "",
        friendEmail: ""
      };
      
      isSubmitting = false;
    }, 1000);
  }

  function getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
</script>

<div class="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
  <form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="space-y-6">
    <div class="space-y-2">
      <Label for="goal-name">目標名稱 *</Label>
      <Input
        id="goal-name"
        bind:value={formData.name}
        placeholder="例如：每天運動30分鐘"
        required
      />
    </div>

    <div class="space-y-2">
      <Label for="goal-description">目標描述 *</Label>
      <Textarea
        id="goal-description"
        bind:value={formData.description}
        placeholder="詳細描述你的目標，包含具體的達成標準..."
        rows={4}
        required
      />
    </div>

    <div class="space-y-2">
      <Label for="goal-deadline">截止日期 *</Label>
      <Input
        id="goal-deadline"
        type="date"
        bind:value={formData.deadline}
        min={getTodayDate()}
        required
      />
    </div>

    <div class="space-y-2">
      <Label for="friend-email">見證人 Email *</Label>
      <Input
        id="friend-email"
        type="email"
        bind:value={formData.friendEmail}
        placeholder="friend@example.com"
        required
      />
      <p class="text-sm text-gray-500 dark:text-gray-400">
        你的好友將收到邀請信，協助檢查你的目標達成情況
      </p>
    </div>

    <div class="flex justify-center pt-4">
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        class="w-full px-8 py-4 text-lg sm:w-auto"
      >
        {isSubmitting ? "建立中..." : "建立目標"}
      </Button>
    </div>
  </form>
</div>
<div class="mt-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
  <h3 class="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-100">
    💡 使用提示
  </h3>
  <ul class="space-y-2 text-sm text-blue-800 dark:text-blue-200">
    <li>• 設定具體、可衡量的目標，讓好友容易確認</li>
    <li>• 選擇信任的好友作為見證人</li>
    <li>• 截止日期要合理，給自己足夠時間達成</li>
    <li>• 你的好友會收到邀請信，可以隨時檢查你的進度</li>
  </ul>
</div>