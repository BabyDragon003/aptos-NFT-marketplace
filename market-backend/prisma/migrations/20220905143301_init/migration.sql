-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ongoing', 'revoked', 'finished');

-- CreateTable
CREATE TABLE "offers" (
    "id" BIGINT NOT NULL,
    "tokenId" BIGSERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "seller" TEXT NOT NULL,
    "buyer" TEXT,
    "status" "Status" NOT NULL,
    "tokenPropertyVersion" BIGINT NOT NULL,
    "tokenCreator" TEXT NOT NULL,
    "tokenCollection" TEXT NOT NULL,
    "tokenName" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3),

    CONSTRAINT "offers_pkey" PRIMARY KEY ("id")
);

    CONSTRAINT "executions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tokens_propertyVersion_creator_collection_name_key" ON "tokens"("propertyVersion", "creator", "collection", "name");

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "tokens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
