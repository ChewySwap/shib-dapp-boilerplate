import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { shibarium, dogechain } from 'wagmi/chains'

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Doggo Dapp Starter Kit',
  description: 'Doggo Dapp Starter Kit',
  url: 'https://chewyswap.dog', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [shibarium, dogechain] as const // Edit 
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
})