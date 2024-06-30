"use client";

import React, { ReactNode } from "react";
import { config, projectId } from "@/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider } from "wagmi";
import defaultTokens from "@/constants/tokens";

// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) throw new Error("Project ID is not defined");

// Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
  chainImages: {
    109: "https://chewyswap.dog/images/chains/109.png",
    2000: "https://chewyswap.dog/images/chains/2000.png",
  },
  tokens: defaultTokens,
  themeVariables: {
    "--w3m-color-mix": "#00BB7F",
  },
});

export default function Web3ModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
