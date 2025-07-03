<script lang="ts">
  import HeroSection from "$lib/components/home/hero-section.svelte";
  import FeaturesSection from "$lib/components/home/features-section.svelte";
  import CtaSection from "$lib/components/home/cta-section.svelte";
</script>

<div class="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
  <div class="space-y-48 py-24">
    <HeroSection />
    <FeaturesSection />
    <CtaSection />
  </div>
</div>
