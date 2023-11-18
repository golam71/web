import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
//import mdx from "@astrojs/mdx"
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
//import vercel from "@astrojs/vercel/serverless"; // Updated import

export default defineConfig({
  site: "https://salam.app",
  integrations: [tailwind(), sitemap(), solidJs(), compress()],
  vite: {
    ssr: {
      external: ["svgo"],
      noExternal: ["solid-dismiss"],
    },
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
}),

