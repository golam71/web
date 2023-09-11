import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress"; // https://astro.build/config
import { defineConfig } from "astro/config";


// https://astro.build/config
export default defineConfig({
  site: "https://salam.app",
  integrations: [tailwind(), solidJs(), compress()],
  vite: {
    ssr: {
      external: ["svgo"],
      noExternal: ["solid-dismiss"],
    },
   
  },
  output: "static",
});
