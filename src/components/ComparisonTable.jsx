
import React from 'react';

function ComparisonTable({ instalmentsBankA, instalmentsBankB }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full mt-8">
      <h2 className="text-2xl text-center mb-4">Loan Comparison</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Bank A</th>
            <th>Bank B</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through instalmentsBankA and instalmentsBankB to display side-by-side comparison */}
          {instalmentsBankA.map((instalmentA, index) => (
            <tr key={index}>
              <td>{instalmentA.amount}</td>
              <td>{instalmentsBankB[index].amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default  ComparisonTable;
