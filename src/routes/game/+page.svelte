<script lang="ts">
  import GoalForm from "$lib/components/game/goal-form.svelte";
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
  <div class="container mx-auto px-6 py-12">
    <div class="mx-auto max-w-2xl">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          設定新目標
        </h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          創建你的目標，邀請好友見證你的成長
        </p>
      </div>

      <GoalForm />
    </div>
  </div>
</div>