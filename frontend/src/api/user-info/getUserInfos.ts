import { UserInfo } from './types';
import { ApartmentFull } from '../apartment/types';

import axios from 'axios';

import { url } from '../../config/constants';

interface GetUserInfoResponseElement extends UserInfo {
  Apartment: ApartmentFull;
}

type GetUserInfoResponse = GetUserInfoResponseElement[];

async function getUserInfos(): Promise<GetUserInfoResponse> {
  const result = await axios.get<GetUserInfoResponse>(`${url}/user-infos`);

  return result.data;
}

export type { GetUserInfoResponse, GetUserInfoResponseElement };
export { getUserInfos };
