import { url } from '../../config/constants';
import axios from 'axios';

interface UpdateRequestRequest {
  id: number;
  status: string;
  response: string;
  StaffId: number;
}

async function UpdateRequestRequest(input: UpdateRequestRequest) {
  const response = await axios.put(`${url}/requests`, input);

  return response.data;
}

export type { UpdateRequestRequest };
export default UpdateRequestRequest;
