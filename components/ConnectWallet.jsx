import { useWeb3 } from "@3rdweb/hooks";
import { useState } from "react";

// https://stackoverflow.com/a/65378580
import "regenerator-runtime/runtime";

const InstallMetamask = () => (
  <div className="text-red-500 font-medium">
    Please install{" "}
    <a href="https://metamask.io/download/" className="hover:uderline">
      MetaMask Wallet
    </a>
  </div>
);

const ConnectingMetamask = () => (
  <div className="text-orange-500 font medium">
    Connecting to your Metamask Wallet
  </div>
);

const ConnectedMetamask = () => (
  <div className="text-green-500 font medium">Metamask Connected</div>
);

export default function ConnectWallet() {
  const { connectWallet, address, error } = useWeb3();
  const [loginState, setLoginState] = useState();
  const [buttonVisible, setButtonVisible] = useState(true);

  const login = async () => {
    setButtonVisible(false);
    setLoginState(ConnectingMetamask);
    if (!window.ethereum || !window.ethereum.isMetaMask) {
      setLoginState(InstallMetamask);
      return;
    }
    connectWallet("injected");
  };

  if (error)
    return (
      <div>
        <p>Error code: {error.code}</p>
        <p className="text-red-500 font-medium">{error.message}</p>
      </div>
    );
  
  return (
    <div className="">
      {address ? (
        <section>
          <h3 className="font-medium text-3xl">Status</h3>
          <ConnectedMetamask />
        </section>
      ) : (
        <div>
          {buttonVisible && (
            <button
              className="rounded-md px-5 py-2 bg-orange-500 font-medium text-white"
              onClick={login}
            >
              Connect Wallet
            </button>
          )}
          <p>{loginState}</p>
        </div>
      )}
    </div>
  );
}

