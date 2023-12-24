import Apartment from "../../models/building/Apartment.js";
import ApartmentService from "../../service/ApartmentService.js";

export default async function seedApartment() {
  await ApartmentService.addUserInfo(1, 1);
  await ApartmentService.addUserInfo(1, 2);
  await ApartmentService.addUserInfo(2, 3);
}
