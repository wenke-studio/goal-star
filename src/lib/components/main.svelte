<script lang="ts" module>
  import type { Snippet } from "svelte";

  interface MainProps {
    children: Snippet;
  }
</script>

<script lang="ts">
  const { children }: MainProps = $props();
</script>

<main class="relative w-full">
  <div class="container mx-auto h-dvh border border-red-500">
    {@render children()}
  </div>
</main>
