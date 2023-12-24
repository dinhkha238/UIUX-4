import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database.js";
import Apartment from "./Apartment.js";

const Building = sequelize.define("Building", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});

export default Building;
