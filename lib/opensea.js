import { OpenSeaPort, Network } from 'opensea-js'
import "regenerator-runtime/runtime";
import { useWeb3 } from "@3rdweb/hooks";

const opensea = () => {
    const {provider} = useWeb3();

    const seaport = new OpenSeaPort(provider, {
      networkName: Network.Main,
      apiKey: "RANDOM"
    })

    return seaport
    
}



export default opensea;