✅ 1. How to test the production remotes paths

You want to verify this will work:

production: {
atlas: "/atlas/assets/remoteEntry.v1.js",
nova: "/nova/assets/remoteEntry.v1.js",
},

🧠 What this assumes in production

It assumes one of these is true:

https://your-domain.com/atlas/assets/remoteEntry.v1.js
https://your-domain.com/nova/assets/remoteEntry.v1.js

Meaning:

Shell is hosted at /

Atlas build is hosted at /atlas

Nova build is hosted at /nova

✅ Easiest way to test this LOCALLY (recommended)
Step 1 — Build everything
pnpm build

This builds:

apps/shell/dist

apps/atlas/dist

apps/nova/dist

Step 2 — Create a fake “prod” folder

From repo root:

mkdir -p prod/atlas prod/nova

Then copy builds:

cp -r apps/atlas/dist/_ prod/atlas/
cp -r apps/nova/dist/_ prod/nova/
cp -r apps/shell/dist/\* prod/

Your structure should be:

prod/
├── index.html ← shell
├── assets/
├── atlas/
│ └── assets/
│ └── remoteEntry.v1.js
├── nova/
│ └── assets/
│ └── remoteEntry.v1.js

Step 3 — Serve it as ONE site
npx serve prod -l 5173

# or

pnpm dlx serve prod -l 5173

Now open:

http://localhost:5173
http://localhost:5173/atlas
http://localhost:5173/nova

✅ If both remotes load → production config is correct

This is exactly how it will behave behind nginx / CDN.
