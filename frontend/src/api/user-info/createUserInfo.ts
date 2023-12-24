import { UserInfo } from './types';

import { url } from '../../config/constants';

import axios from 'axios';

interface CreateUserInfoRequest extends Omit<UserInfo, 'id'> {
  account: boolean;
}

async function createUserInfo(data: CreateUserInfoRequest): Promise<UserInfo> {
  const result = await axios.post<UserInfo>(`${url}/user-info`, data);

  return result.data;
}

export type { CreateUserInfoRequest };
export { createUserInfo };
