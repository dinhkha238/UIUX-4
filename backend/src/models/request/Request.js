import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database.js";

import User from "../user/User.js";

const Request = sequelize.define("Request", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Đang xử lý",
    unique: false,
  },
  response: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
  },
});

User.hasMany(Request);
Request.belongsTo(User);
Request.belongsTo(User, { as: "Staff" });

export default Request;
