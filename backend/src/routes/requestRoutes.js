import { Router } from "express";

import RequestService from "../service/RequestService.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    if (req.query.UserId) {
      const response = await RequestService.getRequestsByUserId(
        req.query.UserId
      );

      if (!response) {
        res.send("No request found");
        return;
      }
      res.send(response);
      return;
    }
    const response = await RequestService.getRequests();

    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const response = await RequestService.createRequest(req.body);
    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/", async (req, res) => {
  try {
    const response = await RequestService.updateRequest(req.body);
    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
