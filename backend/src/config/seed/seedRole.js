import Role from "../../models/user/Role.js";

export default async function seedRole() {
  const roles = ["staff", "resident", "manager", "police"];

  await Role.bulkCreate(
    roles.map((role) => {
      return { name: role };
    })
  );
}
