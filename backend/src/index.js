import express from "express";

import cors from "cors";

import { setupDatabase } from "./config/database.js";

import userRoutes from "./routes/userRoutes.js";
import userInfoRoutes from "./routes/userInfoRoutes.js";
import apartmentRoutes from "./routes/apartmentRoutes.js";
import buildingRoutes from "./routes/buildingRoutes.js";

import { synchronizeDatabase } from "./config/database-seed.js";

function setUpServer() {
  const app = express();
  const port = 3000;

  app.use(cors());
  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use("/users", userRoutes);
  app.use("/user-infos", userInfoRoutes);
  app.use("/apartments", apartmentRoutes);
  app.use("/buildings", buildingRoutes);

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}

async function main() {
  await setupDatabase();

  await synchronizeDatabase();

  setUpServer();
}

main();
