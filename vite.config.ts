import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "@heroui": [
            "@heroui/avatar",
            "@heroui/theme",
            "@heroui/badge",
            "@heroui/button",
            "@heroui/code",
            "@heroui/dropdown",
            "@heroui/input",
            "@heroui/kbd",
            "@heroui/link",
            "@heroui/navbar",
            "@heroui/snippet",
            "@heroui/switch",
            "@heroui/system",
            "@heroui/toast",
          ],
        },
      },
    },
  },
});
