import { PrismaClient } from "@prisma/client";
import { APTOS_NODE_URL, APTOS_FAUCET_URL } from "./constants";

export const aptosClient = new AptosClient(APTOS_NODE_URL!);
export const walletClient = new WalletClient(APTOS_NODE_URL!, APTOS_FAUCET_URL!)
export const prismaClient = new PrismaClient();