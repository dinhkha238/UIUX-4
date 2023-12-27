import { Invoice } from './types';

import axios from 'axios';
import { url } from '../../config/constants';

async function getInvoices(): Promise<Invoice[]> {
  const result = await axios.get<Invoice[]>(`${url}/invoices`);

  return result.data;
}

export { getInvoices };
