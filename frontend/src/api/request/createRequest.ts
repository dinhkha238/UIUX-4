import axios from 'axios';
import { url } from '../../config/constants';

interface CreateRequestInput {
  title: string;
  description: string;
  UserId: number;
}

async function createRequest(data: CreateRequestInput) {
  const result = await axios.post<CreateRequestInput>(`${url}/requests`, data);

  return result.data;
}

export type { CreateRequestInput };
export { createRequest };
