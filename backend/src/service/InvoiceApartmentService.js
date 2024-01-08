import Invoice from "../models/invoice/Invoice.js";
import InvoiceApartment from "../models/invoice/InvoiceApartment.js";

import Apartment from "../models/building/Apartment.js";
import UserInfo from "../models/user/UserInfo.js";
import Building from "../models/building/Building.js";
import { Op } from "sequelize";
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

// getInvoiceApartmentsByDateStartToEnd. example: /invoice-apartments?dateStart=2021-01-01&dateEnd=2021-01-31
  getInvoiceApartmentsByDateStartToEnd: async (startDate, endDate,type) => {
    // type have 3 value: day, month, year (yyyy-mm-dd)
    // filter by year 
    if(type == "month"){
      const result = await InvoiceApartment.findAll({
        where: {
        },
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
    }

    if(type === "day"){
      const result = await InvoiceApartment.findAll({
        where: {
          startDate: {
            [Op.gte]: startDate,
          },
          endDate: {
            [Op.lte]: endDate,
          },
        },
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

    }
  },

  getInvoiceApartmentsByID: async (id) => {
    const result = await InvoiceApartment.findOne({
      where: {
        id: id,
      },
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
