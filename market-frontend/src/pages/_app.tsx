import "../styles/globals.css";
import "../styles/loading.css";
import { NavBar } from "../components/NavBar";
import type { AppProps } from "next/app";
import { useMemo, useState } from "react";
import {
  FewchaWalletAdapter,
  PontemWalletAdapter,
  MartianWalletAdapter,
  WalletProvider,
  AptosWalletAdapter,
} from "@manahippo/aptos-wallet-adapter";
import { ModalContext, ModalState } from "../components/ModalContext";
function MyApp({ Component, pageProps }: AppProps) {
  const [modalState, setModalState] = useState<ModalState>({
      },
    }),
    [modalState]
  );

  return (
    <WalletProvider wallets={wallets} autoConnect={true}>
      <ModalContext.Provider value={modals}>
        <div className="px-8">
          <NavBar />
          <Component {...pageProps} className="bg-base-300" />
        </div>
      </ModalContext.Provider>
    </WalletProvider>
  );
}

export default MyApp;
