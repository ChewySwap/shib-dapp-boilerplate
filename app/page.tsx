'use client'
import Image from "next/image";
import ConnectButton from "../components/ConnectButton/index";
import { useEffect, useState } from "react";
import { useAccount, useReadContract } from 'wagmi';
import { Address, formatEther, formatUnits } from "viem";
import erc20Abi from "../constants/abi/erc20";
import { useWeb3Modal, useWalletInfo } from '@web3modal/wagmi/react'
import * as contracts from "../constants/contracts/contracts";
import { config, projectId } from '@/config'

export default function Home() {
  const [ chewyBalance, setChewyBalance ] = useState<string>("")
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()
  const { open, close } = useWeb3Modal()
  const { walletInfo } = useWalletInfo()

  const tokenContract = {
    address: '0x2761723006d3Eb0d90B19B75654DbE543dcd974f',
    abi: erc20Abi,
  } as const


    const { data: tokenData, isError } = useReadContract({
      abi: erc20Abi,
      address: '0x2761723006d3Eb0d90B19B75654DbE543dcd974f',
      functionName: "balanceOf",
      args: [address as Address]
    })


  useEffect(() => {
    if (tokenData) {
      setChewyBalance(formatUnits(tokenData as any, 18));
    }
  }, [tokenData, isConnected]);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <ConnectButton />
        <ol className="font-mono list-inside list-decimal text-sm text-center sm:text-left">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        Chewy Balance: {chewyBalance}<br />
        <div className="inline-block">{isConnected ? 'Wallet Connected' : 'Wallet Not Connected'}{isConnected && walletInfo && (<> ({walletInfo.name})</>)}</div><br />
        {isError ? ("ERROR") : "No Error"}<br />

       {isConnected && walletInfo && <img src={walletInfo.icon} />}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file-text.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
