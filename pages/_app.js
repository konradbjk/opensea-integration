
import "@/styles/global.css";

import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

import "regenerator-runtime/runtime";

function MyApp({ Component, pageProps }) {
    // Ropsten 3
    // Rinkeby 4
    // Kovan 42
  const supportedChainIds = [3, 4, 42];

  const connectors = {
    injected: {},
  };

  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;