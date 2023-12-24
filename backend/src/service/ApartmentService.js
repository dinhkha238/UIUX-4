import Apartment from "../models/building/Apartment.js";
import Building from "../models/building/Building.js";

import UserInfo from "../models/user/UserInfo.js";

const ApartmentService = {
  async getAllApartments() {
    return await Apartment.findAll({
      include: [UserInfo, Building],
    });
  },

  async addUserInfo(apartmentId, userInfoId) {
    const apartment = await Apartment.findByPk(apartmentId);
    const userInfo = await UserInfo.findByPk(userInfoId);

    if (apartment && userInfo) {
      userInfo.ApartmentId = apartment.id;
      await userInfo.save();
      return { success: true };
    }

    return { success: false };
  },

  async createApartment(apartment) {
    return await Apartment.create(apartment);
  },

  async updateApartment(apartment) {
    const apartmentInstance = await Apartment.findByPk(apartment.ApartmentId);

    if (apartmentInstance) {
      await apartmentInstance.update(apartment);
      return { success: true };
    }

    return { success: false };
  },
};

export default ApartmentService;
