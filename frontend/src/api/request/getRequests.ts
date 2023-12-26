import axios from 'axios';
import { url } from '../../config/constants';

import { RequestFull } from './types';

type GetRequestsRequest = RequestFull[];

async function getRequests() {
  const result = await axios.get<GetRequestsRequest>(`${url}/requests`);

  return result.data;
}

export type { GetRequestsRequest };
export { getRequests };
