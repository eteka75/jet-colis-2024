// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';
// import { newTravelSchema } from '@/components/forms/AddTrajet/StepThree';
// import { NextResponse } from 'next/server';
// // import { StepOneSchema, StepTwoSchema } from '@/schemas/steps'; // Assure-toi que ce chemin est correct

// const prisma = new PrismaClient();

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // Lire et analyser le corps de la requête en JSON
//     const data = await req.json();
//     // Validation des données avec Zod
//     const validatedData = newTravelSchema.parse(data);
//     console.log(validatedData);
//     return;

//     // Création du trajet
//     const newTrip = await prisma.trajet.create({
//       data: {
//         titre: validatedData.tripName,
//         lieuDepart: validatedData.departurePlace,
//         lieuDestination: validatedData.arrivalPlace,
//         description: validatedData.description,
//         userId: validatedData.userId,
//       },
//     });

//     // Création des colis associés
//     const packageEntries = validatedData.packages.map((pkg) => ({
//       type: pkg.type,
//       kilograms: pkg.kilograms,
//       trajetId: newTrip.id, // Associe les colis au trajet créé
//     }));

//     await prisma.trajetTypeColis.createMany({
//       data: packageEntries,
//     });

//     return NextResponse.json(newTrip, { status: 201 });
//   } catch (error) {
//     console.error('Erreur lors de la création du trajet ou des colis:', error);
//     return NextResponse.json(
//       { error: 'Erreur lors de la création du trajet ou des colis.' },
//       { status: 500 }
//     );
//   }
// }
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { newTravelSchema } from '@/components/forms/AddTrajet/StepThree';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await req.json();
    console.log('Données reçues:', data); // Ajoutez ceci pour déboguer

    const validatedData = newTravelSchema.parse(data);
    console.log('Données validées:', validatedData); // Ajoutez ceci pour déboguer

    const newTrip = await prisma.trajet.create({
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
      trajetId: newTrip.id,
    }));

    await prisma.trajetTypeColis.createMany({
      data: packageEntries,
    });

    return NextResponse.json(newTrip, { status: 201 });
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
