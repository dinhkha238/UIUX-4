import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database.js";

import UserInfo from "../user/UserInfo.js";
import Building from "./Building.js";

const Apartment = sequelize.define("Apartment", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  size: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: false,
  },
});

Apartment.hasMany(UserInfo);
Building.hasMany(Apartment);
Apartment.belongsTo(Building);

export default Apartment;
