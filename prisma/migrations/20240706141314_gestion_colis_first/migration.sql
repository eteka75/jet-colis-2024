/*
  Warnings:

  - Added the required column `nom` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "nom" TEXT NOT NULL,
ADD COLUMN     "prenom" TEXT,
ADD COLUMN     "profileId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TypeColis" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "TypeColis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TarifsColis" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "prix" DECIMAL(10,2) NOT NULL,
    "typeColisId" TEXT NOT NULL,

    CONSTRAINT "TarifsColis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTarifsColis" (
    "id" TEXT NOT NULL,
    "prix" DECIMAL(10,2) NOT NULL,
    "typeColisId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserTarifsColis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trajet" (
    "id" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "lieuDepart" TEXT NOT NULL,
    "lieuDestination" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startLatitude" DOUBLE PRECISION,
    "startLongitude" DOUBLE PRECISION,
    "endLatitude" DOUBLE PRECISION,
    "endLongitude" DOUBLE PRECISION,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Trajet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrajetTypeColis" (
    "id" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "maxKg" DOUBLE PRECISION NOT NULL,
    "remainingKg" DOUBLE PRECISION NOT NULL,
    "trajetId" TEXT NOT NULL,
    "typeColisId" TEXT NOT NULL,

    CONSTRAINT "TrajetTypeColis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commande" (
    "id" TEXT NOT NULL,
    "qteCommande" DOUBLE PRECISION NOT NULL,
    "totalPrix" DOUBLE PRECISION NOT NULL,
    "trajetId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "typeColisId" TEXT NOT NULL,

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "trajetId" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imageUrl" TEXT,
    "audioUrl" TEXT,
    "videoUrl" TEXT,
    "senderId" TEXT NOT NULL,
    "receiveId" TEXT NOT NULL,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocalisationTrajet" (
    "id" TEXT NOT NULL,
    "type" TEXT,
    "label" TEXT NOT NULL,
    "adresse" TEXT,
    "latitude" DOUBLE PRECISION,
    "logitude" DOUBLE PRECISION,
    "userId" TEXT NOT NULL,

    CONSTRAINT "LocalisationTrajet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favori" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trajetId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Favori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preference" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Preference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TypeColisToUserTarifsColis" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TypeColis_nom_key" ON "TypeColis"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "TarifsColis_typeColisId_key" ON "TarifsColis"("typeColisId");

-- CreateIndex
CREATE UNIQUE INDEX "UserTarifsColis_typeColisId_userId_key" ON "UserTarifsColis"("typeColisId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "TrajetTypeColis_trajetId_typeColisId_key" ON "TrajetTypeColis"("trajetId", "typeColisId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_id_key" ON "Review"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Review_userId_trajetId_key" ON "Review"("userId", "trajetId");

-- CreateIndex
CREATE UNIQUE INDEX "Favori_userId_trajetId_key" ON "Favori"("userId", "trajetId");

-- CreateIndex
CREATE UNIQUE INDEX "Preference_userId_key_key" ON "Preference"("userId", "key");

-- CreateIndex
CREATE UNIQUE INDEX "_TypeColisToUserTarifsColis_AB_unique" ON "_TypeColisToUserTarifsColis"("A", "B");

-- CreateIndex
CREATE INDEX "_TypeColisToUserTarifsColis_B_index" ON "_TypeColisToUserTarifsColis"("B");

-- AddForeignKey
ALTER TABLE "TarifsColis" ADD CONSTRAINT "TarifsColis_typeColisId_fkey" FOREIGN KEY ("typeColisId") REFERENCES "TypeColis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTarifsColis" ADD CONSTRAINT "UserTarifsColis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTarifsColis" ADD CONSTRAINT "UserTarifsColis_typeColisId_fkey" FOREIGN KEY ("typeColisId") REFERENCES "TarifsColis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trajet" ADD CONSTRAINT "Trajet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrajetTypeColis" ADD CONSTRAINT "TrajetTypeColis_trajetId_fkey" FOREIGN KEY ("trajetId") REFERENCES "Trajet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrajetTypeColis" ADD CONSTRAINT "TrajetTypeColis_typeColisId_fkey" FOREIGN KEY ("typeColisId") REFERENCES "TypeColis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_trajetId_fkey" FOREIGN KEY ("trajetId") REFERENCES "Trajet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_typeColisId_fkey" FOREIGN KEY ("typeColisId") REFERENCES "TarifsColis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_trajetId_fkey" FOREIGN KEY ("trajetId") REFERENCES "Trajet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_receiveId_fkey" FOREIGN KEY ("receiveId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocalisationTrajet" ADD CONSTRAINT "LocalisationTrajet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favori" ADD CONSTRAINT "Favori_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favori" ADD CONSTRAINT "Favori_trajetId_fkey" FOREIGN KEY ("trajetId") REFERENCES "Trajet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preference" ADD CONSTRAINT "Preference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TypeColisToUserTarifsColis" ADD CONSTRAINT "_TypeColisToUserTarifsColis_A_fkey" FOREIGN KEY ("A") REFERENCES "TypeColis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TypeColisToUserTarifsColis" ADD CONSTRAINT "_TypeColisToUserTarifsColis_B_fkey" FOREIGN KEY ("B") REFERENCES "UserTarifsColis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
