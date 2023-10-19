
import React from 'react';

const LoanResults = ({ results }) => {
  return (
    <div className="bg-blue-300 p-4">
      <h2 className="text-2xl mb-4">Loan Calculation Results</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Loan Amount</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Installment Breakdown</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Interest</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Processing Fees</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Excise Duty</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Legal Fees</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Take-Home Amount</td>
            <td className="border px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoanResults;
