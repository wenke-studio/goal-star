<script lang="ts">
  import Footer from "$lib/components/footer.svelte";
  import Header from "$lib/components/header.svelte";
  import Main from "$lib/components/main.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<Header />
<Main>
  {@render children()}
</Main>
<Footer />
