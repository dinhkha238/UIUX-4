import UserInfo from "../models/user/UserInfo.js";

import User from "../models/user/User.js";

import removeAccents from "remove-accents";

import UserRole from "../models/user/UserRole.js";

const UserInfoService = {
  async getAllUserInfo() {
    console.log("UserInfoService.getAllUserInfo()");

    return await UserInfo.findAll();
  },

  async createUserInfo(userInfo) {
    return await UserInfo.create(userInfo);
  },

  async createUserInfoNew(userInfo) {
    const userInfoInstance = await UserInfo.create(userInfo);

    if (userInfo.account) {
      let nextId = User.max("id") + 1;
      const username = removeAccents(userInfoInstance.firstName)
        .toLowerCase()
        .replace(/\s/g, "")
        .concat(nextId);

      const password = userInfo.phone;

      const userInstance = await User.create({
        username,
        password,
      });

      console.log(userInstance);

      await UserRole.create({
        UserId: userInstance.id,
        RoleId: 2,
        primary: true,
      });

      await userInfoInstance.update({
        UserId: userInstance.id,
      });
    }
  },
};

export default UserInfoService;
