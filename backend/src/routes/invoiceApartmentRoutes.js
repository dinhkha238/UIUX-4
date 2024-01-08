import { Router } from "express";

import InvoiceApartmentService from "../service/InvoiceApartmentService.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await InvoiceApartmentService.getInvoiceApartments();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await InvoiceApartmentService.createInvoiceApartment(
      req.body
    );
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/statistic", async (req, res) => {
  try {
    const { dateStart, dateEnd, type } = req.query;
    const result = await InvoiceApartmentService.getInvoiceApartmentsByDateStartToEnd(
      dateStart,
      dateEnd,
      type
    );
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.get("/:id", async (req, res) => {
  try {
    const { id } = req.query;
    const result = await InvoiceApartmentService.getInvoiceApartmentsByID(
      id
    );
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
