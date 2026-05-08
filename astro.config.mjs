import { defineConfig } from "astro/config";
import { functionsMixins } from "vite-plugin-functions-mixins";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  vite: {
    plugins: [functionsMixins({ deps: ["m3-svelte"] })],
  },
});
