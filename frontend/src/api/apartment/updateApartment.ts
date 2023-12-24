import { url } from '../../config/constants';
import { Apartment } from './types';

import axios from 'axios';

type UpdateApartmentRequest = Apartment;

type UpdateApartmentResponse = {};

async function updateApartment(data: UpdateApartmentRequest): Promise<UpdateApartmentResponse> {
  const result = await axios.put<UpdateApartmentRequest>(`${url}/apartments`, data);

  return result.data;
}

export type { UpdateApartmentRequest, UpdateApartmentResponse };
export { updateApartment };
