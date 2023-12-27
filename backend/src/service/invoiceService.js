import Invoice from "../models/invoice/Invoice.js";

const InvoiceService = {
  getInvoices: async () => {
    const invoices = await Invoice.findAll();
    return invoices;
  },

  createInvoice: async (invoice) => {
    const result = await Invoice.create(invoice);

    return result;
  },
};

export default InvoiceService;
