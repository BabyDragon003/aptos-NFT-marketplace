import { Subject } from "rxjs";
import { MARKET_ADDRESS } from "./config/constants";
import { aptosClient } from "./config/libs";
import { State } from "./State";
import { Event } from "./types/events/event";
}

export async function events<T>(eventField: string, seqNum: bigint) {
  const events = await aptosClient.getEventsByEventHandle(
    MARKET_ADDRESS!,
    `${MARKET_ADDRESS}::marketplace::MarketEvents`,
    eventField,
    { start: seqNum + 1n, limit: 100 }
  );
  return events.map((e) => e as Event<T>);
}
