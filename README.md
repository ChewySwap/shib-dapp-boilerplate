## Doggo Boilerplate

Dapp boilerplate (work in progress) for Shibarium / Dogechain / Any EVM chain really using NextJS 15 RC (using App Router), Tailwinds, Wagmi/Viem with Walletconnect's AppKit for wallet UI. It should work with nearly any Wallet app/extension out there and uses very up-to-date libraries.

- [WAGMI Docs](https://)
- [AppKit Docs](https://docs.walletconnect.com/appkit/next/core/installation)
- [NextJS Docs](https://docs.walletconnect.com/appkit/next/core/installation)

This was developed by [ChewySwap](https://chewyswap.dog) to help our fellow builders get a good start on building out their decentralized applications! [Join our TG if you have any questions](https://t.me/ChewySwapCommunity)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

This boilerplate was made using pnpm package manager which we recommend, but you can delete pnpm-lock.yaml and use npm or yarn if you like.

- [Instructions to Install PNPM Package Manager](https://pnpm.io/installation)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

For Web3Modal to work properly you must register a projectId at [https://cloud.walletconnect.com/](https://cloud.walletconnect.com/) and put it into your .env file as follows:

```bash
NEXT_PUBLIC_PROJECT_ID=projectidhere
```

Edit chain configuration in `config/index.ts`

Edit Web3Modal settings in `context/index.ts`

Change default tokens to display in ConnectButton per chain in `constants/tokens/index.ts`

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
