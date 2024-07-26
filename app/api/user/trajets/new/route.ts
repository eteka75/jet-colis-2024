import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { newTravelSchema } from '@/components/forms/AddTrajet/StepThree';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); // Lire et analyser le corps de la requête en JSON
    const validatedData = newTravelSchema.parse(data); // Validation des données avec Zod
    console.log(validatedData);

    /*const newTrip = await prisma.trajet.create({
      data: {
        titre: validatedData.tripName,
        lieuDepart: validatedData.departurePlace,
        lieuDestination: validatedData.arrivalPlace,
        description: validatedData.description,
        userId: validatedData.userId,
      },
    });

    const packageEntries = validatedData.packages.map((pkg) => ({
      type: pkg.type,
      kilograms: pkg.kilograms,
      trajetId: newTrip.id, // Associe les colis au trajet créé
    }));

    await prisma.trajetTypeColis.createMany({
      data: packageEntries,
    });

    return NextResponse.json(newTrip, { status: 201 });*/
  } catch (error) {
    console.error('Erreur lors de la création du trajet ou des colis:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du trajet ou des colis.' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 405 });
}
