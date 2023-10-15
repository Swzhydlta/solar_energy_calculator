import { Request, Response } from "express";
import { goSolrProducts, tarrifs } from "../data";
import {
  calculateMonthlyConsumption,
  calculateGoSolrSavings,
  calculateRecommendedInstallation,
} from "../utilities";

export const calculateOffer = (request: Request, response: Response) => {
  const { monthlyElectricityExpenseString } = request.body;
  const monthlyElectricityExpense = parseInt(monthlyElectricityExpenseString);

  const monthlyConsumption = calculateMonthlyConsumption(
    monthlyElectricityExpense,
    tarrifs.under600Kwh,
    tarrifs.over600Kwh
  );

  const recommendedProduct = calculateRecommendedInstallation(
    monthlyElectricityExpense
  );
  const dataForUser = [
    { name: "Cost without GoSolr", value: monthlyElectricityExpenseString },
    { name: "Recommended solution", value: recommendedProduct },
    { name: "GoSolr cost", value: "2900" },
    { name: "GoSolr savings", value: "2800" },
    { name: "Total cost", value: "3500" },
    { name: "Difference", value: "800" },
  ];

  return response.status(201).send({ message: "success", data: dataForUser });
};
