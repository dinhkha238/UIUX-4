import Building from "../../models/building/Building.js";
import BuildingService from "../../service/BuildingService.js";

export default async function seedBuilding() {
  let apartments = [];

  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; ++j) {
      apartments.push({ name: `${j}0${i}`, size: 40 });
    }
  }

  let buildings = [
    {
      name: "Vina Sky Palace",
      Apartments: apartments,
    },
    { name: "Lam VIP Royal Cloud", Apartments: apartments },
  ];

  for (let building of buildings) {
    await BuildingService.createBuilding(building);
  }
}
