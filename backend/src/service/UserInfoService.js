import UserInfo from "../models/user/UserInfo.js";

import User from "../models/user/User.js";

import removeAccents from "remove-accents";

import UserRole from "../models/user/UserRole.js";
import Apartment from "../models/building/Apartment.js";
import Building from "../models/building/Building.js";

const UserInfoService = {
  async getAllUserInfo() {
    return await UserInfo.findAll({
      include: [
        {
          model: Apartment,
          include: [Building],
        },
      ],
    });
  },

  async createUserInfo(userInfo) {
    return await UserInfo.create(userInfo);
  },

  async createUserInfoNew(userInfo) {
    try {
      const userInfoInstance = await UserInfo.create(userInfo);

      if (userInfo.account) {
        let nextId = (await User.max("id")) + 1;

        const names = userInfo.firstName.split(" ").map((name) => {
          return removeAccents(name).toLowerCase();
        });

        let first = names.pop();

        first += removeAccents(userInfo.lastName).toLowerCase()[0];

        names.forEach((name) => {
          first = first.concat(name[0]);
        });

        const username = first + nextId;

        const password = userInfo.phone;

        const userInstance = await User.create({
          username,
          password,
        });

        await UserRole.create({
          UserId: userInstance.id,
          RoleId: 2,
          primary: true,
        });

        await userInfoInstance.update({
          UserId: userInstance.id,
        });
      }

      let result = await UserInfo.findByPk(userInfoInstance.id, {
        include: [
          {
            model: User,
          },
        ],
      });

      return result;
    } catch (error) {
      console.log(error);
    }
  },

  async updateUserInfo(userInfo) {
    const userInfoInstance = await UserInfo.findByPk(userInfo.id);

    if (userInfoInstance) {
      await userInfoInstance.update(userInfo);
      return { success: true };
    }

    return { success: false };
  },
};

export default UserInfoService;
