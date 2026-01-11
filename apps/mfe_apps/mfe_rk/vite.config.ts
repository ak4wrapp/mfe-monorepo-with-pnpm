import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  preview: {
    port: 5175,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: "mfe_ak",
      filename: "remoteEntry.v1.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
