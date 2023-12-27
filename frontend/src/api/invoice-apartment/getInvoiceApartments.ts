import { InvoiceApartmentFull } from './types';

import axios from 'axios';

import { url } from '../../config/constants';

interface GetInvoiceApartmentsResponse extends Array<InvoiceApartmentFull> {}

async function getInvoiceApartments(): Promise<GetInvoiceApartmentsResponse> {
  const result = await axios.get<GetInvoiceApartmentsResponse>(`${url}/invoice-apartments`);

  return result.data;
}

export { getInvoiceApartments };
export type { GetInvoiceApartmentsResponse };
