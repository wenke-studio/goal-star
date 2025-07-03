<script lang="ts" module>
  interface Goal {
    title: string;
    description: string;
    deadline: string;
    friendEmail: string;
  }

  interface GameProps {
    data: {
      goal: Goal;
      hasActiveGoal: boolean;
    };
    form?: {
      success?: boolean;
      goal?: Goal;
      error?: string;
    } | null;
  }
</script>

<script lang="ts">
  import { enhance } from "$app/forms";
  import { Button } from "$lib/components/shadcn/button";
  import { Input } from "$lib/components/shadcn/input";
  import { Label } from "$lib/components/shadcn/label";
  import { Textarea } from "$lib/components/shadcn/textarea";

  const { data, form }: GameProps = $props();

  const today = new Date().toISOString().split('T')[0];
</script>

<div
  class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900"
>
  <div class="container mx-auto px-6 py-12">
    <div class="mx-auto max-w-2xl">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          {data.hasActiveGoal ? "當前目標" : "設定新目標"}
        </h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {data.hasActiveGoal ? "查看你目前的活躍目標" : "創建你的目標，邀請好友見證你的成長"}
        </p>
      </div>

      <div class="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        {#if form?.success}
          <div class="mb-6 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p class="text-green-800 dark:text-green-200">
              🎉 目標設定成功！邀請已發送給你的好友。
            </p>
          </div>
        {/if}

        {#if form?.error}
          <div class="mb-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p class="text-red-800 dark:text-red-200">
              ❌ {form.error}
            </p>
          </div>
        {/if}

        {#if data.hasActiveGoal}
          <div class="mb-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p class="text-blue-800 dark:text-blue-200">
              ℹ️ 當前任務啟用中
            </p>
            <p class="mt-2 text-sm text-blue-600 dark:text-blue-300">
              你已經有一個活躍的目標。完成或取消當前目標後才能建立新目標。
            </p>
          </div>
        {/if}

        <form
          method="POST"
          action="?/create"
          use:enhance
          class="space-y-6"
        >
          <div class="space-y-2">
            <Label for="title">目標名稱 *</Label>
            <Input
              id="title"
              name="title"
              value={data.goal.title}
              placeholder="例如：每天運動30分鐘"
              disabled={data.hasActiveGoal}
              readonly={data.hasActiveGoal}
              required
            />
          </div>

          <div class="space-y-2">
            <Label for="description">目標描述 *</Label>
            <Textarea
              id="description"
              name="description"
              value={data.goal.description}
              placeholder="詳細描述你的目標，包含具體的達成標準..."
              rows={4}
              disabled={data.hasActiveGoal}
              readonly={data.hasActiveGoal}
              required
            />
          </div>

          <div class="space-y-2">
            <Label for="deadline">截止日期 *</Label>
            <Input
              id="deadline"
              name="deadline"
              type="date"
              value={data.goal.deadline}
              min={today}
              disabled={data.hasActiveGoal}
              readonly={data.hasActiveGoal}
              required
            />
          </div>

          <div class="space-y-2">
            <Label for="friendEmail">見證人 Email *</Label>
            <Input
              id="friendEmail"
              name="friendEmail"
              type="email"
              value={data.goal.friendEmail}
              placeholder="friend@example.com"
              disabled={data.hasActiveGoal}
              readonly={data.hasActiveGoal}
              required
            />
            <p class="text-sm text-gray-500 dark:text-gray-400">
              你的好友將收到邀請信，協助檢查你的目標達成情況
            </p>
          </div>

          <div class="flex justify-center gap-4 pt-4">
            {#if data.hasActiveGoal}
              <Button
                type="submit"
                size="lg"
                disabled
                class="px-8 py-4 text-lg"
              >
                目標已建立
              </Button>
            {:else}
              <Button
                type="submit"
                size="lg"
                class="px-8 py-4 text-lg"
              >
                建立目標
              </Button>
            {/if}
          </div>
        </form>

        {#if data.hasActiveGoal}
          <form method="POST" action="?/delete" use:enhance class="mt-4">
            <div class="flex justify-center">
              <Button
                type="submit"
                variant="destructive"
                size="lg"
                class="px-8 py-4 text-lg"
              >
                停用目標
              </Button>
            </div>
          </form>
        {/if}
      </div>
      <div class="mt-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
        <h3 class="mb-3 text-lg font-semibold text-blue-900 dark:text-blue-100">💡 使用提示</h3>
        <ul class="space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <li>• 設定具體、可衡量的目標，讓好友容易確認</li>
          <li>• 選擇信任的好友作為見證人</li>
          <li>• 截止日期要合理，給自己足夠時間達成</li>
          <li>• 你的好友會收到邀請信，可以隨時檢查你的進度</li>
        </ul>
      </div>
    </div>
  </div>
</div>
