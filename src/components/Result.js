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
              <tr key={formatter.format(unitData.year)}>
                <td>{formatter.format(unitData.year)}</td>
                <td>{formatter.format(unitData.valueEndOfYear)}</td>
                <td>{formatter.format(unitData.interest)}</td>
                <td>
                  {formatter.format(
                    unitData.valueEndOfYear -
                      initialInvestment -
                      annualInvestment * unitData.year,
                  )}
                </td>
                <td>
                  {formatter.format(
                    initialInvestment + annualInvestment * unitData.year,
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
