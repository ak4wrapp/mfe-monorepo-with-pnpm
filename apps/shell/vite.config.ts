import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const getRemoteAtlasUrl = (env: Record<string, string>) => {
  console.log("Atlas Remote URL:", env.VITE_ATLAS_REMOTE_URL);
  return env.VITE_ATLAS_REMOTE_URL;
};
const getRemoteNovaUrl = (env: Record<string, string>) => {
  console.log("Nova Remote URL:", env.VITE_NOVA_REMOTE_URL);
  return env.VITE_NOVA_REMOTE_URL;
};

// export default defineConfig(({ command, mode }) => {
export default defineConfig(({ mode }) => {
  // console.log("Vite command:", command);
  // console.log("Vite mode:", mode);

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
        remotes: {
          atlas: getRemoteAtlasUrl(env),
          nova: getRemoteNovaUrl(env),
        },
        shared: ["react", "react-dom"],
      }),
    ],
  };
});
