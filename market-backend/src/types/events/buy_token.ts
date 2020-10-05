import { MarketId } from "../structs";

export interface BuyTokenEventData {
  market_id: MarketId;
  price: string;
  token_id: TokenId;
  seller: string;
  buyer: string;
  offer_id: string;
  timestamp: string;
}
