import { Building } from '../building/types';

import { UserInfo } from '../user-info/types';

interface Apartment {
  id: number;
  name: string;
  size: number;
  BuildingId: number;
}

interface ApartmentFull extends Apartment {
  Building: Building;
  UserInfos: UserInfo[];
}

interface ApartmentFull extends Apartment {
  Building: Building;
}

export type { Apartment, ApartmentFull };
