import {
  AptosAccount,
  WalletClient,
  HexString,
} from "@martiandao/aptos-web3-bip44.js";
import * as env from "dotenv";
env.config({ path: `.env.${process.env.NODE_ENV}.local` });

const {
  NEXT_PUBLIC_APTOS_NODE_URL: APTOS_NODE_URL,
  );
  const payload = {
    function: `${MARKET_ADDRESS}::marketplace::list_token`,
    type_arguments: [COIN_TYPE],
    arguments: [
      MARKET_ADDRESS,
      MARKET_NAME,
      "0xa0153890d8a3c360bc1045b4a9566dcfade479c2a8d2122056186ddc8ad2e2bc",
      "cybercat",
      "cybercat",
      "0",
      "10",
    ],
  };
  const transaction = await client.aptosClient.generateTransaction(
    account.address(),
    payload,
    { gas_unit_price: 100 }
  );
  const tx = await client.signAndSubmitTransaction(account, transaction);
  const result = await client.aptosClient.waitForTransactionWithResult(tx, {
    checkSuccess: true,
  });
  console.log(result.vm_status);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
