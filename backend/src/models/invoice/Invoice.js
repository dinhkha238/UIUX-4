import { sequelize } from "../../config/database.js";

import { DataTypes } from "sequelize";

const Invoice = sequelize.define("Invoice", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});

export default Invoice;
