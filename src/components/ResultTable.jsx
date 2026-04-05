import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ userInputs }) {
  const resData = calculateInvestmentResults(userInputs);
  const initialInvestment = resData[0].valueEndOfYear - resData[0].interest - resData[0].annualInvestment

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resData.map((result) => {

        const totalInterest = result.valueEndOfYear - result.annualInvestment*result.year - initialInvestment
        const totalInvestment = result.valueEndOfYear - totalInterest
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
