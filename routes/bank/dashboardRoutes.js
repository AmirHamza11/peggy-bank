import express from "express";
import { getDashboardData } from "../../controllers/bank/dashboardController.js";
const router = express.Router();

router.route("/").get(getDashboardData);

export default router;
