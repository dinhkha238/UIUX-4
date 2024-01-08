import { Router } from "express";
const router = Router();

import UserInfoService from "../service/UserInfoService.js";

// Route to get all user info
router.get("/", async (req, res) => {
  try {
    const result = await UserInfoService.getAllUserInfo();

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get('/statistic', async (req, res) => {
  try {
    const { dateStart, dateEnd } = req.query;
    const result = await UserInfoService.getUsersByDateStartToEnd(
      dateStart,
      dateEnd,
    );
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
})

router.post("/", async (req, res) => {
  try {
    const result = await UserInfoService.createUserInfoNew(req.body);

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/", async (req, res) => {
  try {
    const result = await UserInfoService.updateUserInfo(req.body);

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
