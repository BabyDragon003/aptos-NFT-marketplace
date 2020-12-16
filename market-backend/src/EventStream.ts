import { Subject } from "rxjs";
import { MARKET_ADDRESS } from "./config/constants";
import { aptosClient } from "./config/libs";
import { State } from "./State";
import { Event } from "./types/events/event";

export function eventStream<T>(): Subject<{
  state: State;
  events: Event<T>[];
}> {
}
