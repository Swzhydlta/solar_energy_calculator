import { UserMetrics } from "../interfaces/userMetrics";

interface CalculatorService {
  calculateProductRecommendation: (input: any) => Promise<UserMetrics[]>;
}

export const calculatorService: CalculatorService = {
  async calculateProductRecommendation(input) {
    // const apiEndpoint =
    //   "https://k0op0a69el.execute-api.us-east-1.amazonaws.com/dev";
    //  const response = await fetch(`${apiEndpoint}/calculate/calculate-offer`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(input),
    // });

    const response = await fetch(
      `http://localhost:1337/calculate/calculate-offer`,
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
