import { useWallet, Wallet } from "@manahippo/aptos-wallet-adapter";
import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export function WalletModal() {
  const { wallets, connect, account, disconnect } = useWallet();
  const { modalState, setModalState } = useContext(ModalContext);

  async function connectWallet(wallet: Wallet) {
    connect(wallet.adapter.name);
    setModalState({ ...modalState, walletModal: false });
  }

  function disconnectWallet() {
    disconnect();
    setModalState({ ...modalState, walletModal: false });
  }

  function modalBox(content: JSX.Element) {
        </label>
      </>
    );
  }

  return account?.address
    ? modalBox(
        <>
          <p
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "inline",
            }}
          >
            Account: {account!.address!.toString()}
          </p>
          <button className="btn mt-5" onClick={disconnectWallet}>
            Disconnect
          </button>
        </>
      )
    : modalBox(
        <>
          {wallets.map((wallet: Wallet, i) => {
            return (
              <button
                key={i}
                className={
                  i == wallets.length - 1 ? "btn gap-2" : "btn gap-2 mb-5"
                }
                onClick={() => connectWallet(wallet)}
              >
                <Image width={25} height={25} src={wallet.adapter.icon} />
                {wallet.adapter.name}
              </button>
            );
          })}
        </>
      );
}
