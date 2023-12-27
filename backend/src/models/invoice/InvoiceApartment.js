import { sequelize } from "../../config/database.js";

import { DataTypes } from "sequelize";

import Invoice from "./Invoice.js";
import Apartment from "../building/Apartment.js";

const InvoiceApartment = sequelize.define("InvoiceApartment", {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    unique: false,
  },
  endDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    unique: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "unpaid",
    unique: false,
  },
  paidDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    unique: false,
  },
});

Invoice.hasMany(InvoiceApartment);
InvoiceApartment.belongsTo(Invoice);

Apartment.hasMany(InvoiceApartment);
InvoiceApartment.belongsTo(Apartment);

export default InvoiceApartment;
