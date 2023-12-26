import { UserService } from "../../service/UserService.js";

export default async function seedUser() {
  const users = [
    {
      username: "khanhtv",
      password: "1",
      roles: [
        { name: "staff", primary: true },
        { name: "resident", primary: false },
      ],
      info: {
        firstName: "Khánh",
        lastName: "Trần",
        email: "tvkain.it@gmail.com",
        gender: "Nam",
        phone: "0123456789",
        city: "Hồ Chí Minh",
        district: "Quận 1",
        subdistrict: "Phường 1",
        birthday: "1999-01-01",
      },
    },
    {
      username: "lamnt",
      password: "1",
      roles: [
        { name: "resident", primary: true },
        { name: "police", primary: false },
      ],
      info: {
        firstName: "Lam",
        lastName: "Ngô",
        email: "lamnt@gmail.com",
        gender: "Nữ",
        phone: "0889389268",
        city: "Hà Nội",
        district: "Quận 1",
        subdistrict: "Phường 1",
        birthday: "2000-01-01",
      },
    },
    {
      username: "phuocnx",
      password: "1",
      roles: [
        { name: "manager", primary: true },
        { name: "resident", primary: false },
      ],
      info: {
        firstName: "Phước",
        lastName: "Nguyễn",
        email: "phuoc@gmail.com",
        phone: "0123456789",
        gender: "Nam",
        city: "Đà Nẵng",
        district: "Quận 1",
        subdistrict: "Phường 1",
        birthday: "1999-01-01",
      },
    },
    {
      username: "staff1",
      password: "1",
      roles: [{ name: "staff", primary: true }],
    },
  ];

  for (const user of users) {
    await UserService.createUser(user);
  }
}
