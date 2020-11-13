import { Execution } from "@prisma/client";
import { prismaClient, walletClient } from "../config/libs";
import { State } from "../State";
import { ListTokenEventData, Event } from "../types";
import { TokenData } from "../types/structs/TokenData";
import { Consumer, handleError } from "./Consumer";

export class ListEventConsumer implements Consumer<ListTokenEventData> {
  async consumeAll(
    state: State,
    events: Event<ListTokenEventData>[]
  ): Promise<State> {
    delete state.old;
    let newState = state;
    newState.old = { ...state };
    for (const event of events) {
      const { success, state } = await this.consume(newState, event);
      if (success) {
        newState.listEventsExecutedSeqNum = state.listEventsExecutedSeqNum;
      } else {
        propertyVersion_creator_collection_name: {
          propertyVersion,
          creator,
          collection,
          name,
        },
      },
    });

    try {
      if (!token) {
        const { description, uri, maximum, supply } =
          (await walletClient.getToken(data.token_id)) as TokenData;
        token = await prismaClient.token.create({
          data: {
            creator,
            propertyVersion,
            collection,
            name,
            uri,
            description,
            maximum: maximum,
            supply: supply,
          },
        });
      }
    } catch (e) {
      handleError(e);
      return { success: false, state: newState };
    }

    const executedSeqNum = BigInt(event.sequence_number);
    const createAt = new Date(parseInt(data.timestamp) / 1000);
    const offerId = BigInt(data.offer_id);
    const price = parseFloat(data.price);
    const seller = data.seller;

    transactions.push(
      prismaClient.execution.update({
        where: { id: 1 },
        data: {
          listEventsExecutedSeqNum: executedSeqNum,
        },
      })
    );

    transactions.push(
      prismaClient.offer.create({
        data: {
          id: offerId,
          // FIXME: use token:{connectOrCreate}
          tokenId: token.id,
          price,
          seller,
          status: "ongoing",
          tokenPropertyVersion: propertyVersion,
          tokenCreator: creator,
          tokenCollection: collection,
          tokenName: name,
          createAt,
        },
      })
    );

    try {
      const [execution, _] = await prismaClient.$transaction(transactions);
      newState.listEventsExecutedSeqNum = (
        execution as Execution
      ).listEventsExecutedSeqNum;
      return { success: true, state: newState };
    } catch (e: any) {
      handleError(e);
      return { success: false, state: newState };
    }
  }
}
