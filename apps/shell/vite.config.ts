import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import getRemotes from "./src/remotes";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    federation({
      remotes: getRemotes(mode),
      shared: ["react", "react-dom"],
    }),
  ],
}));
