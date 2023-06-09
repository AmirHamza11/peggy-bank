import express from "express";
import { createTransaction } from "../controllers/transactionController.js";

const router = express.Router();

router.route("/").post(createTransaction);

export default router;
