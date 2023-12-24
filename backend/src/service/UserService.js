import Apartment from "../models/building/Apartment.js";
import Role from "../models/user/Role.js";
import User from "../models/user/User.js";
import UserInfo from "../models/user/UserInfo.js";
import UserRole from "../models/user/UserRole.js";

const UserParser = {
  modelToService: (user) => {
    const roles = RoleParser.modelToService(user.Roles);

    return {
      username: user.username,
      password: user.password,
      roles: roles,
      info: user.UserInfo,
    };
  },
};

const RoleParser = {
  serviceToModel: async (roles, userInstance) => {
    return Promise.all(
      roles.map(async (role) => {
        const roleInstance = await Role.findOne({ where: { name: role.name } });

        return {
          UserId: userInstance.id,
          RoleId: roleInstance.id,
          primary: role.primary,
        };
      })
    );
  },

  modelToService: (roles) => {
    return roles.map((role) => {
      return {
        name: role.name,
        primary: role.UserRole.primary,
      };
    });
  },
};

export const UserService = {
  login: async (user) => {
    const userInstance = await User.findOne({
      where: { ...user },
      include: [Role],
    });

    if (!userInstance) {
      return {
        success: false,
        message: "Tên đăng nhập hoặc mật khẩu không đúng",
      };
    }

    return {
      success: true,
      message: "Đăng nhập thành công",
      data: UserParser.modelToService(userInstance),
    };
  },

  createUser: async (user) => {
    try {
      const userInstance = await User.create({
        username: user.username,
        password: user.password,
      });

      const userRoles = await RoleParser.serviceToModel(
        user.roles,
        userInstance
      );

      await UserRole.bulkCreate(userRoles);

      if (user.info) {
        await UserInfo.create({
          UserId: userInstance.id,
          ...user.info,
        });
      }

      return { success: true };
    } catch (err) {
      return { success: false, message: err };
    }
  },

  /*
        [
            {
                username: ""
                password: ""
                roles: [{name: "", primary: true}, {name: "", primary: false}]
                info: {
                    firstName: ""
                    lastName: ""
                    email: ""
                    phone: ""
                    address: ""
                }
            }
        ]
     */
  getAllUser: async () => {
    try {
      const users = await User.findAll({
        include: [Role, UserInfo],
      });

      const usersOutput = users.map((user) => {
        return UserParser.modelToService(user);
      });

      return { success: true, data: usersOutput };
    } catch (err) {
      return { success: false };
    }
  },
};
