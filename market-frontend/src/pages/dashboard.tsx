import { useTokens } from "../hooks";
import { useRouter } from "next/router";
import { ListCard } from "../components/ListCard";
import { useWallet } from "@manahippo/aptos-wallet-adapter";
import { Loading } from "../components/Loading";

export default function Dashboard() {
  const { account } = useWallet();
  const { tokens, loading } = useTokens(account);
  const router = useRouter();

  return loading ? (
    <Loading />
  ) : !tokens.length ? (
    <h2 className="text-2xl p-8">No NFTs owned</h2>
  ) : (
    <div>
      <div className="p-6">
        <h2 className="text-2xl py-2">Items owned</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
