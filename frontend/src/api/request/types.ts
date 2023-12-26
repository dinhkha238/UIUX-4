import { User } from '../user/types';

interface Request {
  id: number;
  title: string;
  description: string;
  status: string;
  UserId: number;
  StaffId: number;
  createdAt: string;
}

interface RequestFull {
  id: number;
  title: string;
  description: string;
  status: string;
  response: null | string;
  createdAt: string;
  UserId: number;
  StaffId: null | number;
  User: {
    id: number;
    username: string;
    password: string;
    UserInfo: {
      id: number;
      firstName: string;
      lastName: string;
      gender: string;
      birthday: string;
      email: string;
      phone: string;
      city: string;
      district: string;
      subdistrict: string;
      UserId: number;
      ApartmentId: number;
      Apartment: {
        id: number;
        name: string;
        size: number;
        BuildingId: number;
        Building: {
          id: number;
          name: string;
        };
      };
    };
  };
  Staff: null | User;
}

export type { Request, RequestFull };
