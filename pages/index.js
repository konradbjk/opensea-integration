import Head from 'next/head'
import { useWeb3 } from "@3rdweb/hooks";
import TextHeader from '@/components/TextHeader'
import ConnectWallet from '@/components/ConnectWallet'
import opensea from '@/lib/opensea';

const checkAssets = async (address) => {

  const seaport = opensea()
  
  const asset = {
    tokenAddress: "0x06012c8cf97bead5deae237070f9587f8e7a266d", // CryptoKitties
    // tokenId: "1", // Token ID
  }
  
  const balance = await seaport.getAssetBalance({
    address, // string
    asset, // Asset
  })
  
  const ownsKitty = balance.greaterThan(0)
  
  return ownsKitty
  
}

export default function Home() {
  
  const {address} = useWeb3();
  const ownsKitty = checkAssets(address)

  return (
    <div className="container px-2">
      <Head>
        <title>Opeansea integration</title>
        <meta name="description" content="Testing integration to opensea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TextHeader text="Opensea API"/>
        <ConnectWallet />
        {address}
        {ownsKitty}
      </main>
      </div>
      
  )
}
