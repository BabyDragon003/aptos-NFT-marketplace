import { Subject } from "rxjs";

export type State = {
  listEventsExecutedSeqNum: bigint;
  buyEventsExecutedSeqNum: bigint;
