import { NFTStorage } from "nft.storage";
import * as fs from "fs/promises";
import mime from "mime";
import path from "path";
import axios from "axios";
import { NFT_STORAGE_KEY } from "../config/constants";

export class NFTStorageClient {
  private nftStorage: NFTStorage;
  constructor(token: string) {
    if (ipfsURL.startsWith("ipfs:"))
      return (
        "https://nftstorage.link/ipfs/" +
        new URL(ipfsURL).pathname.replace(/^\/\//, "")
      );
    return ipfsURL;
  }

  async upload(file: string | File, name: string, description: string) {
    const image = await this.fileFromPath(file);
    return await this.nftStorage.store({ image, name, description });
  }

  async getImageURL(tokenURL: string) {
    let gatewayURL = this.convertGatewayURL(tokenURL);
    let image = (await axios.get(gatewayURL)).data.image;
    return this.convertGatewayURL(image);
  }
}

export const nftStorage = new NFTStorageClient(NFT_STORAGE_KEY!);