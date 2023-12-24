import { Router } from "express";

const router = Router();

import ApartmentService from "../service/ApartmentService.js";

router.get("/", async (req, res) => {
  try {
    const result = await ApartmentService.getAllApartments();

    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/add-resident", async (req, res) => {
  try {
    const result = await ApartmentService.addUserInfo(
      req.body.apartmentId,
      req.body.userInfoId
    );

    if (result.success) {
      res.send(result);
    } else {
      res.status(400).send(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/", async (req, res) => {
  try {
    const result = await ApartmentService.updateApartment(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await ApartmentService.createApartment(req.body);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
