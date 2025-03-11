// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // site: "https://Bat3orig.github.io",
  // base: "https://github.com/Bat3orig/Bat3orig.github.io.git",
  integrations: [react(), icon()],
  i18n: {
    locales: ["en", "mn"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
