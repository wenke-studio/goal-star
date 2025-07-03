<script lang="ts">
  import { Button } from "$lib/components/shadcn/button";
  import { SignedIn, SignedOut, SignInButton, UserButton } from "svelte-clerk";

  let title = "幫我看看這個";
</script>

<header class="relative w-full">
  <div class="fixed inset-x-0 top-0 z-50 container mx-auto h-16 overflow-hidden">
    <div class="flex h-full items-center justify-between backdrop-blur-sm">
      <h1 class="text-xl font-bold">{title}</h1>

      <div class="flex items-center gap-4">
        <SignedOut>
          <SignInButton asChild>
            {#snippet children({ signIn })}
              <Button variant="default" class="active:scale-95" onclick={signIn}>Login</Button>
            {/snippet}
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  </div>
</header>

<div class="h-16"></div>
