import express from "express";
import { calculateOffer } from "../controllers/calculator-controller";

const calculatorRoutes = express.Router();

calculatorRoutes.route("/calculate-offer").post(calculateOffer);

export default calculatorRoutes;
