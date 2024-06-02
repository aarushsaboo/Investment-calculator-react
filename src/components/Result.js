import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((unitData) => {
            return (
              <tr key={unitData.year}>
                <td>{unitData.year}</td>
                <td>{unitData.valueEndOfYear}</td>
                <td>{unitData.interest}</td>
                <td>
                  {unitData.valueEndOfYear -
                    initialInvestment -
                    annualInvestment * unitData.year}
                </td>
                <td>{initialInvestment + annualInvestment * unitData.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
