import { StepOneData } from '@/components/forms/AddTrajet/StepOne';
import { TravelFormData } from '@/components/forms/AddTrajet/Steps';
import { StepTwoData } from '@/components/forms/AddTrajet/StepTwo';
import axios from 'axios';

const api = axios.create({
  //   baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  baseURL: 'http://localhost:3000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const saveTrip = async (data: any) => {
  //   console.log('DATA = ', data);
  return api.post('/user/trajets/new', data);
};

export const fetchTrip = async (id: string) => {
  return api.get(`/trip/${id}`);
};
