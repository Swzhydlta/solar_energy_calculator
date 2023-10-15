import { UserMetrics } from "../interfaces/userMetrics";

interface Props {
  metrics: UserMetrics[];
  setFormStep: (input: number) => void;
}

export default function MetricsForUser({ metrics, setFormStep }: Props) {
  return (
    <div>
      <h2>Here's the best fit for you:</h2>
      <div className="gs-form-message"></div>

      <div className="gs-metrics-wrapper">
        {metrics.map((item) => (
          <div className="gs-metrics-row">
            <div className="gs-metric-name-wrapper">
              <div className="gs-sun-icon"></div>
              <div className="gs-metric-name">{item.name}</div>
            </div>

            <div>{item.value}</div>
          </div>
        ))}
      </div>
      <button className="gs-form-button" onClick={() => setFormStep(0)}>
        <strong>Back</strong>
      </button>
    </div>
  );
}
