import axios from 'axios';
import { url } from '../../config/constants';

import { ApartmentFull } from './types';

import { Building } from '../building/types';
import { UserInfo } from '../user-info/types';

interface GetAparmentsResponseElement extends ApartmentFull {}

type GetAparmentsResponse = GetAparmentsResponseElement[];

async function getApartments(): Promise<GetAparmentsResponse> {
  const result = await axios.get<GetAparmentsResponse>(`${url}/apartments`);
  return result.data;
}

export { getApartments };
export type { GetAparmentsResponse, GetAparmentsResponseElement };
