import { sequelize } from "../../config/database.js";
import { DataTypes } from "sequelize";

import User from "./User.js";
import Role from "./Role.js";

const UserRole = sequelize.define("UserRole", {
  primary: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });

export default UserRole;
