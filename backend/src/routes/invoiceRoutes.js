import { Router } from "express";

const router = Router();

import InvoiceService from "../service/invoiceService.js";

router.get("/", async (req, res) => {
  try {
    const result = await InvoiceService.getInvoices();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await InvoiceService.createInvoice(req.body);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/", async (req, res) => {});

export default router;
