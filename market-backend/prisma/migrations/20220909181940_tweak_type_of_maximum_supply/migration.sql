ALTER TABLE "tokens" ALTER COLUMN "maximum" DROP NOT NULL,
ALTER COLUMN "maximum" SET DATA TYPE TEXT,
ALTER COLUMN "supply" SET DATA TYPE TEXT;
