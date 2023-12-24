import Apartment from "../models/building/Apartment.js";
import Building from "../models/building/Building.js";

const BuildingService = {
  async getAllApartments() {
    return await Apartment.findAll({
      include: [Building],
    });
  },

  async createBuilding(building) {
    const buildingInstance = await Building.create(building, {
      include: [Apartment],
    });

    return { success: true, id: buildingInstance.id };
  },

  async getAllBuilding() {
    const buildings = await Building.findAll({
      include: [Apartment],
    });

    return { data: buildings };
  },
};

export default BuildingService;
