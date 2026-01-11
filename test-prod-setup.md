✅ 1. How to test the production remotes paths

You want to verify this will work:

production: {
mfe_ak: "/mfe_ak/assets/remoteEntry.v1.js",
mfe_rk: "/mfe_rk/assets/remoteEntry.v1.js",
},

🧠 What this assumes in production

It assumes one of these is true:

https://your-domain.com/mfe_ak/assets/remoteEntry.v1.js
https://your-domain.com/mfe_rk/assets/remoteEntry.v1.js

Meaning:

Shell is hosted at /

mfe_ak build is hosted at /mfe_ak

mfe_rk build is hosted at /mfe_rk

✅ Easiest way to test this LOCALLY (recommended)
Step 1 — Build everything
pnpm build

This builds:

apps/shell/dist

apps/mfe_ak/dist

apps/mfe_rk/dist

Step 2 — Create a fake “prod” folder

From repo root:

mkdir -p prod/mfe_ak prod/mfe_rk

Then copy builds:

cp -r apps/mfe*ak/dist/* prod/mfe*ak/
cp -r apps/mfe_rk/dist/* prod/mfe_rk/
cp -r apps/shell/dist/\* prod/

Your structure should be:

prod/
├── index.html ← shell
├── assets/
├── mfe_ak/
│ └── assets/
│ └── remoteEntry.v1.js
├── mfe_rk/
│ └── assets/
│ └── remoteEntry.v1.js

Step 3 — Serve it as ONE site
npx serve prod -l 5173

# or

pnpm dlx serve prod -l 5173

Now open:

http://localhost:5173
http://localhost:5173/mfe_ak
http://localhost:5173/mfe_rk

✅ If both remotes load → production config is correct

This is exactly how it will behave behind nginx / CDN.
