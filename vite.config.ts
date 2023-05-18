import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ command }) => {
  return {
    plugins: [vue()],
    resolve: {
      alias: [
        {
          find: "@vue/runtime-core",
          replacement: "@vue/runtime-core/dist/runtime-core.esm-bundler.js"
        }
      ]
    }
  };
});
