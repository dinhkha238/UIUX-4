import { Building } from '../building/types';

interface Apartment {
  id: number;
  name: string;
  size: number;
  BuildingId: number;
}

interface ApartmentFull extends Apartment {
  Building: Building;
}

export type { Apartment, ApartmentFull };
