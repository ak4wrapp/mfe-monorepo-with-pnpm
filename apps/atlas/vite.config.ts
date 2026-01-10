import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: "atlas",
//       filename: "remoteEntry.v1.js",
//       exposes: {
//         "./App": "./src/App.tsx",
//       },
//       shared: ["react", "react-dom"],
//     }),
//   ],
//   build: {
//     outDir: "dist",
//     cssCodeSplit: false,
//   },
// });

export default defineConfig({
  preview: {
    port: 5174,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: "atlas",
      filename: "remoteEntry.v1.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
