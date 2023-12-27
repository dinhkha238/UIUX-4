import { ApartmentFull } from '../apartment/types';

import { Invoice } from '../invoice/types';

interface InvoiceApartment {
  id: number;
  description: string;
  amount: number;
  startDate: string;
  endDate: string;
  status: string;
  paidDate: string;
  InvoiceId: number;
  ApartmentId: number;
}

interface InvoiceApartmentFull extends InvoiceApartment {
  Apartment: ApartmentFull;
  Invoice: Invoice;
}

export type { InvoiceApartment, InvoiceApartmentFull };
