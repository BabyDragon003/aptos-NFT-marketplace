import { NFTStorage } from "nft.storage";
import * as fs from "fs/promises";
import mime from "mime";
import path from "path";
import axios from "axios";
import { NFT_STORAGE_KEY } from "../config/constants";

export class NFTStorageClient {
  private nftStorage: NFTStorage;
  constructor(token: string) {
    this.nftStorage = new NFTStorage({ token });
  }

  private async fileFromPath(file: string | File) {
    if (file instanceof File) return file;
    const content = await fs.readFile(file);
    const type = mime.getType(file)!;
    return new File([content], path.basename(file), { type });
  }

  private convertGatewayURL(ipfsURL: string) {
    if (ipfsURL.startsWith("ipfs:"))
      return (
        "https://nftstorage.link/ipfs/" +
        new URL(ipfsURL).pathname.replace(/^\/\//, "")
