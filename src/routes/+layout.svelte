<script lang="ts">
  import { ClerkProvider } from "svelte-clerk";
  import { Toaster } from "$lib/components/shadcn/sonner";

  import Footer from "$lib/components/footer.svelte";
  import Header from "$lib/components/header.svelte";
  import Main from "$lib/components/main.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<ClerkProvider>
  <Header />
  <Main>
    {@render children()}
  </Main>
  <Footer />
  <Toaster />
</ClerkProvider>
