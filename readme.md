Since we want to load mfe_akt and mfe_rk as MFE, they will only load when we build and preview not just run application.

1. Run pnpm commands to build both MFE
   "build:mfe_ak": "pnpm --filter mfe_ak build",
   "build:mfe_rk": "pnpm --filter mfe_rk build",
2. Then preview
   "preview:mfe_ak": "pnpm --filter mfe_ak preview",
   "preview:mfe_rk": "pnpm --filter mfe_rk preview",
3. Now run shell
   "dev:shell": "pnpm --filter shell dev"
