import axios from 'axios';

import { url } from '../../config/constants';

import { User, UserRole, Role } from './types';

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse extends User {
  Roles: [{ id: number; name: string; UserRole: UserRole }];
}

async function login(data: LoginRequest): Promise<LoginResponse> {
  const result = await axios.post<LoginResponse>(`${url}/users/login`, data);
  return result.data;
}

export { login };
export type { LoginRequest, LoginResponse };
