import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import getRemotes from "./src/remotes";

export default defineConfig(({ mode }) => ({
  preview: {
    port: 5173,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      remotes: getRemotes(mode),
      shared: ["react", "react-dom"],
    }),
  ],
}));
