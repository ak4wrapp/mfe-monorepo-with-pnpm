import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import getRemotes from "./src/remotes";

// export default defineConfig(({ command, mode }) => {
export default defineConfig(({ mode }) => {
  // console.log("Vite command:", command);
  console.log("Vite mode:", mode);

  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd(), "");
  // console.log("Loaded env variables:", env);

  return {
    preview: {
      port: 5173,
      strictPort: true,
    },
    plugins: [
      react(),
      federation({
        name: "shell",
        remotes: getRemotes(env),
        shared: ["react", "react-dom"],
      }),
    ],
  };
});
