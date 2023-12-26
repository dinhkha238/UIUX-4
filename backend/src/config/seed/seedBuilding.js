import Building from "../../models/building/Building.js";
import BuildingService from "../../service/BuildingService.js";

export default async function seedBuilding() {
  let apartments = [];

  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; ++j) {
      let size;
      if (i == 3) {
        size = 60;
      }

      if (i == 2 || i == 1) {
        size = 40;
      }

      if (i == 5 || i == 4) {
        size = 50;
      }

      apartments.push({ name: `${j}0${i}`, size: size });
    }
  }

  let buildings = [
    {
      name: "Vina Sky Palace",
      Apartments: apartments,
    },
    { name: "VIP Royal Cloud", Apartments: apartments },
    {
      name: "Lam's Sì Kai",
      Apartments: apartments,
    },
  ];

  for (let building of buildings) {
    await BuildingService.createBuilding(building);
  }
}
