export const calculateMonthlyConsumption = (
  monthlyElectricityExpense: number,
  tarrifUnder600: number,
  tarrifAbove600: number
): number => {
  if (monthlyElectricityExpense > tarrifUnder600 * 600) {
    return Math.round(
      (monthlyElectricityExpense - 600 * tarrifUnder600) / tarrifAbove600 + 600
    );
  } else {
    return Math.round(monthlyElectricityExpense / tarrifUnder600);
  }
};

export const calculateGoSolrSavings = (
  calculatedMonthlyConsumption: number,
  expectedMonthlyOutput: number,
  tarrifUnder600: number,
  tarrifAbove600: number
): number => {
  if (calculatedMonthlyConsumption < 600) {
    return expectedMonthlyOutput * tarrifUnder600;
  } else if (calculatedMonthlyConsumption - expectedMonthlyOutput > 599) {
    return expectedMonthlyOutput * tarrifAbove600;
  } else {
    return (
      (calculatedMonthlyConsumption - 600) * tarrifAbove600 +
      (600 - (calculatedMonthlyConsumption - expectedMonthlyOutput)) *
        tarrifUnder600
    );
  }
};

export const calculateRecommendedInstallation = (
  monthlyElectricityExpense: number
): string => {
  if (monthlyElectricityExpense < 1500) {
    return "small";
  } else if (monthlyElectricityExpense < 3000) {
    return "medium";
  } else if (monthlyElectricityExpense < 5000) {
    return "large";
  } else {
    return "extraLarge";
  }
};
