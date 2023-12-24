import axios from 'axios';
import { url } from '../../config/constants';

import { Apartment } from './types';

import { Building } from '../building/types';
import { UserInfo } from '../user-info/types';

interface GetAparmentsResponseElement extends Apartment {
  Building: Building;
  UserInfos: UserInfo[];
}

type GetAparmentsResponse = GetAparmentsResponseElement[];

async function getApartments(): Promise<GetAparmentsResponse> {
  const result = await axios.get<GetAparmentsResponse>(`${url}/apartments`);
  return result.data;
}

export { getApartments };
export type { GetAparmentsResponse, GetAparmentsResponseElement };
