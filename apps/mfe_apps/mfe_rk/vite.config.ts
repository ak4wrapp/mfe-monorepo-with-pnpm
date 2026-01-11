import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "/", // VERY IMPORTANT for Vercel,
  build: {
    target: "esnext",
    outDir: "dist",
    assetsDir: "assets",
  },
  preview: {
    port: 5175,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: "mfe_rk",
      filename: "remoteEntry.js", // ⚠️ avoid version suffix
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
