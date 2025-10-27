# Oasis DeFi Exchange

Welcome to Oasis - The premier decentralized crypto exchange. Powered by Jae Kwon.

## About

Oasis is a cutting-edge decentralized exchange (DEX) built on the Cosmos ecosystem, offering:

- 🌊 **Liquidity Pools** - Capital efficient pools with granular control
- ♾️ **Perpetuals Trading** - Trade at up to 30x leverage
- 📊 **Margin Trading** - Lend and borrow assets
- 💧 **Liquid Staking** - Dead simple staking with no lock-ups
- 🌐 **Multichain Support** - Access liquidity from over 100 ecosystems

## Getting Started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system.

To get started with development, first install the dependencies with:

```bash
pnpm install
```

Then, run a development version of the project with:

```bash
pnpm dev
```

After a few seconds, your project should be accessible at the address
[http://localhost:5173/](http://localhost:5173/)

To build the project for production:

```bash
pnpm build
```

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Shadcn UI Components
- Lucide Icons

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

**To deploy:**

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. Enable GitHub Pages in your repository:
   - Go to **Settings** → **Pages**
   - Under "Build and deployment", select **Source: GitHub Actions**

3. The site will automatically deploy on every push to `main`

Your site will be available at: `https://oasis-dex.github.io/website/`

**Manual deployment:**
- Go to the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

**Local production build:**
```bash
pnpm run deploy
```
