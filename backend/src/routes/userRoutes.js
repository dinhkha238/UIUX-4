import { Router } from "express";

import { UserService } from "../service/UserService.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await UserService.getAllUser();

    res.send(result.data);
  } catch (err) {
    res.status(500).send();
  }
});

/*
    // TODO use typescript 
    {
        username: 
        password: 
        roles: [{name: "staff", primary: true}, {name: "resident", primary: false}]
        info: {
            name: 
            phone: 
            email: 
            address: 
        }
    }
 */
router.post("/", async (req, res) => {
  try {
    const result = await UserService.createUser(req.body);

    if (result.success) {
      res.send(result);
    } else {
      res.status(400).send(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const result = await UserService.login(req.body);

    if (result.success) {
      res.send(result);
    } else {
      res.status(401).send(result);
    }
  } catch (err) {
    res.status(500).send();
  }
});

export default router;
