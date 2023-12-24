import UserInfo from "../models/user/UserInfo.js";

const UserInfoService = {
  async getAllUserInfo() {
    console.log("UserInfoService.getAllUserInfo()");

    return await UserInfo.findAll();
  },
};

export default UserInfoService;
