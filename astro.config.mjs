import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://Bat3orig.github.io", // Correct site URL
  base: "/", // Since your repo is named `Bat3orig.github.io`, the base should be `/`
  integrations: [react(), icon()],
  i18n: {
    locales: ["en", "mn"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
