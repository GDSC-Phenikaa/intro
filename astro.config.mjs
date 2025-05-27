// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://gdsc.phenikaa-uni.edu.vn",

  integrations: [preact(), icon(), sitemap({
    filter: (page) =>
      !page.includes("/blog/tags") &&
      !page.includes("/blog/techs"),
  }),],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },

  adapter: node({
    mode: "standalone",
  }),

  experimental: {
    session: true
  }
});