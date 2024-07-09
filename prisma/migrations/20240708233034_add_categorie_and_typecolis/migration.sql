/*
  Warnings:

  - You are about to drop the column `description` on the `Categorie` table. All the data in the column will be lost.
  - You are about to drop the column `prix` on the `TarifsColis` table. All the data in the column will be lost.
  - You are about to drop the column `categorieId` on the `TypeColis` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nom,typeColisId]` on the table `Categorie` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[trajetId,userId,typeColisId,categorieId]` on the table `Commande` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `typeColisId` to the `Categorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prixKilo` to the `TarifsColis` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Commande" DROP CONSTRAINT "Commande_typeColisId_fkey";

-- DropForeignKey
ALTER TABLE "TypeColis" DROP CONSTRAINT "TypeColis_categorieId_fkey";

-- DropIndex
DROP INDEX "TarifsColis_typeColisId_key";

-- AlterTable
ALTER TABLE "Categorie" DROP COLUMN "description",
ADD COLUMN     "typeColisId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Commande" ADD COLUMN     "categorieId" TEXT,
ALTER COLUMN "typeColisId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TarifsColis" DROP COLUMN "prix",
ADD COLUMN     "prixKilo" DECIMAL(10,2) NOT NULL;

-- AlterTable
ALTER TABLE "TypeColis" DROP COLUMN "categorieId";

-- CreateTable
CREATE TABLE "TarifsCategorie" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "prixKilo" DECIMAL(10,2) NOT NULL,
    "categorieId" TEXT NOT NULL,

    CONSTRAINT "TarifsCategorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTarifsCategorie" (
    "id" TEXT NOT NULL,
    "prix" DECIMAL(10,2) NOT NULL,
    "categorieId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserTarifsCategorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrajetCategorie" (
    "id" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "maxKg" DOUBLE PRECISION NOT NULL,
    "remainingKg" DOUBLE PRECISION NOT NULL,
    "trajetId" TEXT NOT NULL,
    "categorieId" TEXT NOT NULL,

    CONSTRAINT "TrajetCategorie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTarifsCategorie_categorieId_userId_key" ON "UserTarifsCategorie"("categorieId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "TrajetCategorie_trajetId_categorieId_key" ON "TrajetCategorie"("trajetId", "categorieId");

-- CreateIndex
CREATE UNIQUE INDEX "Categorie_nom_typeColisId_key" ON "Categorie"("nom", "typeColisId");

-- CreateIndex
CREATE UNIQUE INDEX "Commande_trajetId_userId_typeColisId_categorieId_key" ON "Commande"("trajetId", "userId", "typeColisId", "categorieId");

-- AddForeignKey
ALTER TABLE "Categorie" ADD CONSTRAINT "Categorie_typeColisId_fkey" FOREIGN KEY ("typeColisId") REFERENCES "TypeColis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TarifsCategorie" ADD CONSTRAINT "TarifsCategorie_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTarifsCategorie" ADD CONSTRAINT "UserTarifsCategorie_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTarifsCategorie" ADD CONSTRAINT "UserTarifsCategorie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTarifsCategorie" ADD CONSTRAINT "UserTarifsCategorie_tarifsCategorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "TarifsCategorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrajetCategorie" ADD CONSTRAINT "TrajetCategorie_trajetId_fkey" FOREIGN KEY ("trajetId") REFERENCES "Trajet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrajetCategorie" ADD CONSTRAINT "TrajetCategorie_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_typeColisId_fkey" FOREIGN KEY ("typeColisId") REFERENCES "TarifsColis"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "TarifsCategorie"("id") ON DELETE SET NULL ON UPDATE CASCADE;
