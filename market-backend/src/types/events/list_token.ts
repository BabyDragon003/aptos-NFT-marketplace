import { MarketId } from "../structs";

export interface ListTokenEventData {
  market_id: MarketId;
  price: string;
  token_id: TokenId;
  seller: string;
  timestamp: string;
  offer_id: string;
}
