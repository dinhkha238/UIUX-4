import axios from 'axios';
import { url } from '../../config/constants';

import { RequestFull } from './types';

interface GetRequestsByUserIdRequest {
  UserId: number;
}

type GetRequestsByUserIdResponse = RequestFull[];

async function getRequestsByUserId(input: GetRequestsByUserIdRequest) {
  console.log(input);

  const result = await axios.get<GetRequestsByUserIdResponse>(`${url}/requests`, { params: input });

  return result.data;
}

export type { GetRequestsByUserIdRequest, GetRequestsByUserIdResponse };
export { getRequestsByUserId };
