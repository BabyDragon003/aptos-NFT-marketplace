import { useTokens } from "../hooks";
import { useRouter } from "next/router";
import { ListCard } from "../components/ListCard";
import { useWallet } from "@manahippo/aptos-wallet-adapter";
import { Loading } from "../components/Loading";

export default function Dashboard() {
  const { account } = useWallet();
  const { tokens, loading } = useTokens(account);
  const router = useRouter();
            <ListCard
              key={i.toString()}
              data={token}
              onClick={() =>
                router.push(
                  `/make-offer?creator=${token.creator}&name=${token.name}&collection=${token.collection}&description=${token.description}&uri=${token.uri}`
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
