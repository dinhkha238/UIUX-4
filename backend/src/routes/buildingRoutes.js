import { Router } from "express";

import BuildingService from "../service/BuildingService.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await BuildingService.getAllBuilding();

    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await BuildingService.createBuilding(req.body);

    if (result.success) {
      res.send(result.message);
    } else {
      res.status(400).send(result.message);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
