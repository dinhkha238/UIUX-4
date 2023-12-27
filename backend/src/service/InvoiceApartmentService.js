import Invoice from "../models/invoice/Invoice.js";
import InvoiceApartment from "../models/invoice/InvoiceApartment.js";

import Apartment from "../models/building/Apartment.js";
import UserInfo from "../models/user/UserInfo.js";
import Building from "../models/building/Building.js";

const InvoiceApartmentService = {
  createInvoiceApartment: async (data) => {
    const result = await InvoiceApartment.create(data);

    return result;
  },

  getInvoiceApartments: async () => {
    const result = await InvoiceApartment.findAll({
      include: [
        {
          model: Apartment,
          include: [UserInfo, Building],
        },
        {
          model: Invoice,
        },
      ],
    });
    return result;
  },
};

export default InvoiceApartmentService;
