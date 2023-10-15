import { useState } from "react";
import { calculatorService } from "../services/calculatorService";
import "./_styles.scss";

interface Props {
  setFormStep: (arg0: number) => void;
  setCalculatedData: (data: any) => void;
}

export function CalculatorForm({ setFormStep, setCalculatedData }: Props) {
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest = async (input: string) => {
    setLoading(true);
    const formData = {
      monthlyElectricityExpenseString: input,
    };
    try {
      const result = await calculatorService.calculateProductRecommendation(
        formData
      );
      setLoading(false);
      setFormStep(1);
      setCalculatedData(result);
      setInputValue("");
    } catch (error) {
      setLoading(false);
      setError(true);
      setInputValue("");
    }
  };

  return (
    <div className="gs-form-wrapper">
      <div className="gs-form-message">
        <h2>What are your monthly electricity expenses?</h2>
        <p className="gs-form-description">
          Enter the average amount you spend on electricity per month and let us
          work out which GoSolr installation would be the best fit for you.
        </p>
      </div>

      <div className="gs-form-button-wrapper">
        <input
          id="gs-form-input"
          placeholder="Enter your expenses here"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button
          className="gs-form-button"
          onClick={() => sendRequest(inputValue)}
        >
          <strong>{loading ? "...calculating" : "Go"}</strong>
        </button>
        {error && (
          <div style={{ marginTop: "20px" }}>
            There was an error calculating your data
          </div>
        )}
      </div>
    </div>
  );
}
