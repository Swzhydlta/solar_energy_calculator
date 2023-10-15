import { UserMetrics } from "../interfaces/userMetrics";

interface CalculatorService {
  calculateProductRecommendation: (input: any) => Promise<UserMetrics[]>;
}

export const calculatorService: CalculatorService = {
  async calculateProductRecommendation(input) {
    const response = await fetch(
      "http://localhost:1337/calculate/calculate-offer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      }
    );
    if (response.ok) {
      const json = await response.json();
      return json.data;
    } else {
      throw new Error("Request failed with status " + response.status);
    }
  },
};
