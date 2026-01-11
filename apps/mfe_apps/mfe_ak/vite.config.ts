import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "/", // VERY IMPORTANT for Vercel
  build: {
    target: "esnext",
    outDir: "dist",
    assetsDir: "assets",
  },
  preview: {
    port: 5174,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: "mfe_ak",
      filename: "remoteEntry.js", // ⚠️ avoid version suffix
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
});
