Since we want to load atlast and nova as MFE, they will only load when we build and preview not just run application.

1. Run pnpm commands to build both MFE
   "build:atlas": "pnpm --filter atlas build",
   "build:nova": "pnpm --filter nova build",
2. Then preview
   "preview:atlas": "pnpm --filter atlas preview",
   "preview:nova": "pnpm --filter nova preview",
3. Now run shell
   "dev:shell": "pnpm --filter shell dev"
