import Sequelize from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
  define: {
    timestamps: false,
  },
});

export async function setupDatabase() {
  try {
    await sequelize.authenticate();

    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
}
