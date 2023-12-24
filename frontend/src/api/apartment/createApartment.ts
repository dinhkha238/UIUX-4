import { url } from '../../config/constants';
import { Apartment } from './types';

import axios from 'axios';

type CreateApartmentRequest = Omit<Apartment, 'id'>;

type CreateApartmentResponse = Apartment;

async function createApartment(data: CreateApartmentRequest): Promise<CreateApartmentResponse> {
  const result = await axios.post<CreateApartmentResponse>(`${url}/apartments`, data);

  return result.data;
}

export type { CreateApartmentRequest, CreateApartmentResponse };
export { createApartment };
