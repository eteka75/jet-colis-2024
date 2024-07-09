// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type UserSession = {
  id: string;
  name: string;
  email: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
export interface TrajetData {
  id: number;
  photo: string;
  depart: string;
  destination: string;
  tarif: string;
  devise: string;
  unite: string;
  date_depart: string;
  kilo_disponible: number;
  unite_kilo_disponible: string;
}

export interface TrajetItemProps {
  data: TrajetData;
  photos: PhotosData;
}

export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export interface UpdateInvoiceProps {
  id: string;
}
export interface UserContextType {
  user: User | null;
}

// ###################################################
export type List = {
  destination: string;
};

export type PhotosData = {
  [key: string]: string[];
};
export type TrajetType = {
  id: number;
  photo?: string;
  depart?: string;
  destination?: string;
  devise?: string;
  unite?: string;
  tarif?: string;
  date_depart?: string;
  kilo_disponible?: string;
  unite_kilo_disponible?: string;
};
export const list_trajets = [
  {
    id: 1,
    photo: 'photo1.jpeg',
    depart: 'Cotonou',
    destination: 'Lusaka',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 2,
    photo: 'photo2.jpeg',
    depart: 'Paris',
    destination: 'New York',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 3,
    photo: 'photo3.jpeg',
    depart: 'Washington',
    destination: 'Libreville',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 4,
    photo: 'photo1.jpeg',
    depart: 'Abidjan',
    destination: 'Marseille',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 5,
    photo: 'photo1.jpeg',
    depart: 'Namibie',
    destination: 'Sénégal',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 6,
    photo: 'photo1.jpeg',
    depart: 'Parakou',
    destination: 'Namibie',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 7,
    photo: 'photo1.jpeg',
    depart: 'Parakou',
    destination: 'Bamako',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 8,
    photo: 'photo1.jpeg',
    depart: 'Pakistan',
    destination: 'Toronto',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 9,
    photo: 'photo1.jpeg',
    depart: 'Parakou',
    destination: 'Moscou',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 10,
    photo: 'photo1.jpeg',
    depart: 'Mali',
    destination: 'Lomé',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 1,
    photo: 'photo1.jpeg',
    depart: 'Cotonou',
    destination: 'Noisy-le-grand',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 2,
    photo: 'photo2.jpeg',
    depart: 'Paris',
    destination: 'New York',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 3,
    photo: 'photo3.jpeg',
    depart: 'Washington',
    destination: 'Libreville',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 4,
    photo: 'photo1.jpeg',
    depart: 'Abidjan',
    destination: 'Marseille',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 5,
    photo: 'photo1.jpeg',
    depart: 'Paris',
    destination: 'Sénégal',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 6,
    photo: 'photo1.jpeg',
    depart: 'Parakou',
    destination: 'Créteil',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 7,
    photo: 'photo1.jpeg',
    depart: 'Parakou',
    destination: 'Paris',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 8,
    photo: 'photo1.jpeg',
    depart: 'Pakistan',
    destination: 'Toronto',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 9,
    photo: 'photo1.jpeg',
    depart: 'Parakou',
    destination: 'Moscou',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 10,
    photo: 'photo1.jpeg',
    depart: 'Mali',
    destination: 'Lomé',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 1,
    photo: 'photo1.jpeg',
    depart: 'Cotnou',
    destination: 'Rennes',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 2,
    photo: 'photo2.jpeg',
    depart: 'Paris',
    destination: 'Reims',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 3,
    photo: 'photo3.jpeg',
    depart: 'Washington',
    destination: 'Rouen',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 4,
    photo: 'photo1.jpeg',
    depart: 'Abidjan',
    destination: 'Havre',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 5,
    photo: 'photo1.jpeg',
    depart: 'Paris',
    destination: 'Bordeaux',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 6,
    photo: 'photo1.jpeg',
    depart: 'Parakou',
    destination: 'Nantes',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 7,
    photo: 'photo1.jpeg',
    depart: 'Parakou',
    destination: 'Strasbourg',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 8,
    photo: 'photo1.jpeg',
    depart: 'Pakistan',
    destination: 'Monaco',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 9,
    photo: 'photo1.jpeg',
    depart: 'Parakou',
    destination: 'Toulouse',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 10,
    photo: 'photo1.jpeg',
    depart: 'Mali',
    destination: 'Lyon',
    tarif: '8000',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 10,
    photo: 'photo1.jpeg',
    depart: 'Mali',
    destination: 'Nice',
    tarif: '450',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
  {
    id: 10,
    photo: 'photo1.jpeg',
    depart: 'Mali',
    destination: 'Porto Novo',
    tarif: '450',
    devise: 'Euro',
    unite: 'Kg',
    date_depart: '15-07-2027',
    kilo_disponible: 8,
    unite_kilo_disponible: 'Kg',
  },
];

export type DestinationImageType = {
  url: string;
  title?: string;
  subtitle?: string;
  user?: User; // Optionnel si vous ne souhaitez pas qu'il soit toujours présent
};
