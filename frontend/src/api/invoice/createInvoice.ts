import axios from 'axios';

import { url } from '../../config/constants';

import { Invoice } from './types';

interface CreateInvoiceRequest extends Omit<Invoice, 'id'> {}

async function createInvoice(createInvoiceRequest: CreateInvoiceRequest): Promise<Invoice> {
  const result = await axios.post(`${url}/invoices`, createInvoiceRequest);

  return result.data;
}

export { createInvoice };
