import { defineConfig } from "astro/config";
import htmx from "astro-htmx";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [htmx(), tailwind(), icon(), alpinejs()]
});