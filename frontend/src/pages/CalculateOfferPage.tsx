import { CalculatorForm } from "../components/CalculatorForm";
import "./_styles.scss";
import { useState } from "react";
import MetricsForUser from "../components/MetricsForUser";
import { UserMetrics } from "../interfaces/userMetrics";

export default function CalculateOfferPage() {
  const [formStep, setFormStep] = useState<number>(0);
  const [calculatedData, setCalculatedData] = useState<UserMetrics[] | null>(
    null
  );

  return (
    <div>
      <div>
        {formStep === 0 ? (
          <img id="gs-logo" src="/g-solr-logo-full.svg"></img>
        ) : (
          <img id="gs-logo" src="/h-solutions-splendid.svg"></img>
        )}
      </div>
      {formStep === 0 && (
        <CalculatorForm
          setFormStep={setFormStep}
          setCalculatedData={setCalculatedData}
        />
      )}
      {formStep === 1 && calculatedData && (
        <MetricsForUser metrics={calculatedData} setFormStep={setFormStep} />
      )}
    </div>
  );
}
