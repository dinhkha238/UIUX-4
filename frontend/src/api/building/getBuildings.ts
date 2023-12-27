import axios from 'axios';
import { url } from '../../config/constants';

import { Building } from './types';

import { ApartmentFull } from '../apartment/types';
interface GetBuildingsResponseElement extends Building {
  Apartments: ApartmentFull[];
}

interface GetBuildingsResponse extends Array<GetBuildingsResponseElement> {}

async function getBuildings(): Promise<GetBuildingsResponse> {
  const result = await axios.get<GetBuildingsResponse>(`${url}/buildings`);
  return result.data;
}

export { getBuildings };
export type { GetBuildingsResponse, GetBuildingsResponseElement };
