<script lang="ts">
  import { LinearProgress } from "m3-svelte";

  interface Props {
    name: string;
    level?: 1 | 2 | 3;
  }

  let { name, level = 1 }: Props = $props();
</script>

<div class="gap-4">
  {name}
  <div class="level">
    <LinearProgress percent={100} height={5} aria-label="Stufe 1" />
    <LinearProgress
      percent={level > 1 ? 100 : 0}
      height={5}
      aria-label="Stufe 2"
    />
    <LinearProgress
      percent={level === 3 ? 100 : 0}
      height={5}
      aria-label="Stufe 3"
    />
  </div>
</div>

<style>
  .gap-4 {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .level {
    display: flex;
    gap: 4px;
  }
  .level :global(.m3-container) {
    flex: 1;
    gap: 0;
  }
</style>
