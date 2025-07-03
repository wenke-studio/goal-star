<script lang="ts">
  import { Button } from "$lib/components/shadcn/button";
  import * as NavigationMenu from "$lib/components/shadcn/navigation-menu";
</script>

<header class="relative w-full">
  <div class="fixed inset-x-0 top-0 z-50 container mx-auto h-16 overflow-hidden">
    <div class="bg-background/30 flex h-full items-center justify-between backdrop-blur-xs">
      <h1>幫我看看這個</h1>

      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link class="" href="/docs">
              <span class="hidden sm:inline"> Documentation </span>
              <span class="inline sm:hidden"> Docs </span>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <div class="flex items-center gap-4">
        <Button variant="default" class="active:scale-95">Login</Button>
      </div>
    </div>
  </div>
</header>

<div class="h-16"></div>
