/*
  Warnings:

  - You are about to drop the `_TypeColisToUserTarifsColis` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categorieId` to the `TypeColis` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_TypeColisToUserTarifsColis" DROP CONSTRAINT "_TypeColisToUserTarifsColis_A_fkey";

-- DropForeignKey
ALTER TABLE "_TypeColisToUserTarifsColis" DROP CONSTRAINT "_TypeColisToUserTarifsColis_B_fkey";

-- AlterTable
ALTER TABLE "TypeColis" ADD COLUMN     "categorieId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_TypeColisToUserTarifsColis";

-- CreateTable
CREATE TABLE "Categorie" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id")
);

-- RenameForeignKey
ALTER TABLE "UserTarifsColis" RENAME CONSTRAINT "UserTarifsColis_typeColisId_fkey" TO "UserTarifsColis_tarifsColisId_fkey";

-- AddForeignKey
ALTER TABLE "TypeColis" ADD CONSTRAINT "TypeColis_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTarifsColis" ADD CONSTRAINT "UserTarifsColis_typeColisId_fkey" FOREIGN KEY ("typeColisId") REFERENCES "TypeColis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
