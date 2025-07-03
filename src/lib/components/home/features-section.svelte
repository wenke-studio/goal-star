<script lang="ts">
  interface Feature {
    step: number;
    title: string;
    description: string;
  }

  const features: Feature[] = [
    {
      step: 1,
      title: "設定目標",
      description: "創建你的個人目標，設定完成的標準和時間期限"
    },
    {
      step: 2,
      title: "邀請好友",
      description: "邀請信任的朋友作為見證人，讓他們幫你檢查目標達成情況"
    },
    {
      step: 3,
      title: "獲得認證",
      description: "當朋友確認你達成目標後，獲得成就徽章和積分獎勵"
    }
  ];
</script>

<section class="relative w-full">
  <div class="container mx-auto max-w-7xl">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        如何運作
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
        簡單三步驟，讓朋友幫你見證目標達成的過程
      </p>
    </div>

    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {#each features as feature}
          <div class="flex flex-col items-center text-center">
            <dt class="text-base leading-7 font-semibold text-gray-900 dark:text-white">
              <div
                class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600 text-2xl font-bold text-white"
              >
                {feature.step}
              </div>
              {feature.title}
            </dt>
            <dd class="mt-1 text-base leading-7 text-gray-600 dark:text-gray-300">
              {feature.description}
            </dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</section>