Perfect 👍
Below is **ONE single `setup.sh` script** you can run on a clean machine.
It will:

* create a **Turborepo + pnpm** monorepo
* scaffold **shell**, **mfe1**, **mfe2** (React + TS + Vite)
* scaffold **packages/ui**
* configure **Vite base paths**
* configure **Turbo pipelines**
* configure **pnpm workspaces**
* ready for **Vercel / Docker / AWS later**

You **do not need to manually create or edit any files**.

---

## ✅ Prerequisites

Make sure you have:

```sh
node >= 18
pnpm >= 8
```

---

## 🧱 One-shot setup script

### 👉 `setup.sh`

```sh
#!/usr/bin/env bash
set -e

echo "🚀 Creating Turborepo MFE Monorepo with pnpm"

ROOT="mfe-monorepo"
mkdir $ROOT && cd $ROOT

echo "📦 Initializing pnpm workspace"
pnpm init -y

cat <<EOF > pnpm-workspace.yaml
packages:
  - apps/**
  - packages/**
EOF

cat <<EOF > turbo.json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "cache": false
    }
  }
}
EOF

mkdir -p apps/mfe-apps packages

echo "⚛️ Creating Shell App"
pnpm create vite apps/shell --template react-ts
cd apps/shell
pnpm install
cd ../..

echo "⚛️ Creating mfe1"
pnpm create vite apps/mfe-apps/mfe1 --template react-ts
cd apps/mfe-apps/mfe1
pnpm install
cd ../../..

echo "⚛️ Creating mfe2"
pnpm create vite apps/mfe-apps/mfe2 --template react-ts
cd apps/mfe-apps/mfe2
pnpm install
cd ../../..

echo "🎨 Creating shared UI package"
mkdir -p packages/ui/src
cd packages/ui

cat <<EOF > package.json
{
  "name": "@repo/ui",
  "version": "0.0.1",
  "private": true,
  "main": "src/index.ts",
  "types": "src/index.ts",
  "peerDependencies": {
    "react": "^18.0.0"
  }
}
EOF

cat <<EOF > src/index.ts
export const Button = () => {
  return <button>Shared Button</button>
}
EOF

cd ../..

echo "🧠 Configuring Vite base paths"

sed -i '' "s/base: '\\/'/base: '\\/'/g" apps/shell/vite.config.ts || true

sed -i '' "s/defineConfig({/defineConfig({\\n  base: '\\/mfe1\\/',/g" apps/mfe-apps/mfe1/vite.config.ts
sed -i '' "s/defineConfig({/defineConfig({\\n  base: '\\/mfe2\\/',/g" apps/mfe-apps/mfe2/vite.config.ts

echo "📜 Root package.json"

cat <<EOF > package.json
{
  "name": "mfe-monorepo",
  "private": true,
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build"
  },
  "devDependencies": {
    "turbo": "^1.12.0"
  }
}
EOF

echo "📦 Installing root dependencies"
pnpm install

echo "✅ DONE!"
echo ""
echo "Next steps:"
echo "  pnpm dev        → run all apps"
echo "  pnpm build      → build all apps"
echo ""
echo "Apps will be available at:"
echo "  /       → shell"
echo "  /mfe1   → mfe1"
echo "  /mfe2   → mfe2"
```

---

## ▶️ How to run

```sh
chmod +x setup.sh
./setup.sh
```

---

## 📂 Resulting structure

```
mfe-monorepo
├── apps
│   ├── shell
│   └── mfe-apps
│       ├── mfe1
│       └── mfe2
├── packages
│   └── ui
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

## 🚀 What this gives you immediately

* ✅ Turborepo orchestration
* ✅ pnpm workspaces
* ✅ Shared UI package
* ✅ Vite base paths for same-domain deploy
* ✅ Ready for:

  * Vercel path-based routing
  * Docker images per app
  * Helm + ALB / Nginx ingress
  * Bamboo → JFrog

---

## 🔜 Next (optional)

I can generate **another single script** to add:

* Vite **Module Federation**
* Dockerfiles + Helm charts
* Vercel config
* Bamboo build plan

Just tell me which one you want next.
