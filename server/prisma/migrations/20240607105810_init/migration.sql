/*
  Warnings:

  - Changed the type of `account_type` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Business_User" ALTER COLUMN "bio" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "account_type",
ADD COLUMN     "account_type" TEXT NOT NULL;

-- DropEnum
DROP TYPE "AccountType";
