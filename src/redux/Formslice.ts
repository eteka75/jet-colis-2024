// app/formSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Définir l'interface pour le type de l'état
interface Package {
  type: string;
  kilograms: number;
}

interface FormState {
  transportType: string;
  departurePlace: string;
  departureDate: string;
  arrivalPlace: string;
  arrivalDate: string;
  tripName: string;
  description: string;
  totalKilograms: number;
  packages: Package[];
  currentStep: number;
}

const initialState: FormState = {
  transportType: '',
  departurePlace: '',
  departureDate: '',
  arrivalPlace: '',
  arrivalDate: '',
  tripName: '',
  description: '',
  totalKilograms: 0,
  packages: [],
  currentStep: 0,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setTransportType(state: FormState, action: PayloadAction<string>) {
      state.transportType = action.payload;
    },
    setDeparturePlace(state: FormState, action: PayloadAction<string>) {
      state.departurePlace = action.payload;
    },
    setDepartureDate(state: FormState, action: PayloadAction<string>) {
      state.departureDate = action.payload;
    },
    setArrivalPlace(state: FormState, action: PayloadAction<string>) {
      state.arrivalPlace = action.payload;
    },
    setArrivalDate(state: FormState, action: PayloadAction<string>) {
      state.arrivalDate = action.payload;
    },
    setTripName(state: FormState, action: PayloadAction<string>) {
      state.tripName = action.payload;
    },
    setDescription(state: FormState, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setTotalKilograms(state: FormState, action: PayloadAction<number>) {
      state.totalKilograms = action.payload;
    },
    addPackage(state: FormState, action: PayloadAction<Package>) {
      state.packages.push(action.payload);
    },
    removePackage(state: FormState, action: PayloadAction<number>) {
      state.packages.splice(action.payload, 1);
    },
    setCurrentStep(state: FormState, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
    setPackages(state: FormState, action: PayloadAction<Package[]>) {
      state.packages = action.payload;
    },
  },
});

export const {
  setTransportType,
  setDeparturePlace,
  setDepartureDate,
  setArrivalPlace,
  setArrivalDate,
  setTripName,
  setDescription,
  setTotalKilograms,
  addPackage,
  removePackage,
  setCurrentStep,
  setPackages,
} = formSlice.actions;

export default formSlice.reducer;
