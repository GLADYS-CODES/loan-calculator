import React, { useState } from 'react';

function LoanForm() {
  const [loanAmount, setLoanAmount] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState('monthly');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [startDate, setStartDate] = useState('');
  const [interestType, setInterestType] = useState('flatRate');

  const [loading, setLoading] = useState(false);
  const [loanDetails, setLoanDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Prepare the data to send to the backend
    const data = {
      loanAmount,
      paymentFrequency,
      loanPeriod,
      startDate,
      interestType,
    };

    try {
      // Send data to the backend API for loan calculation
      const response = await fetch('/api/calculate-loan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setLoanDetails(result);
      } else {
        setError('An error occurred while processing your request.');
      }
    } catch (error) {
      setError('An error occurred while connecting to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-yellow-300 p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto my-8">
      <h2 className="text-2xl text-center mb-4">Loan Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="loanAmount" className="block">
            Amount to Borrow:
          </label>
          <input
            type="number"
            id="loanAmount"
            className="w-full p-2 border border-gray-300 rounded"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="paymentFrequency" className="block">
            Payment Frequency:
          </label>
          <select
            id="paymentFrequency"
            className="w-full p-2 border border-gray-300 rounded"
            value={paymentFrequency}
            onChange={(e) => setPaymentFrequency(e.target.value)}
          >
            <option value="annually">Annually</option>
            <option value="quarterly">Quarterly</option>
            <option value="monthly">Monthly</option>
            <option value="every6Months">Every 6 Months</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="loanPeriod" className="block">
            Loan Period (in months):
          </label>
          <input
            type="number"
            id="loanPeriod"
            className="w-full p-2 border border-gray-300 rounded"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            className="w-full p-2 border border-gray-300 rounded"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block">Interest Type:</label>
          <label className="inline-block mr-4">
            <input
              type="radio"
              name="interestType"
              value="flatRate"
              checked={interestType === 'flatRate'}
              onChange={() => setInterestType('flatRate')}
            />{' '}
            Flat Rate
          </label>
          <label className="inline-block">
            <input
              type="radio"
              name="interestType"
              value="reducingBalance"
              checked={interestType === 'reducingBalance'}
              onChange={() => setInterestType('reducingBalance')}
            />{' '}
            Reducing Balance
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Calculating...' : 'Calculate Loan'}
        </button>
      </form>

      {error && <div className="text-red-500">{error}</div>}

      {loanDetails && (
        <div className="mt-4">
          <h3 className="text-lg">Loan Calculation Results:</h3>
          {/* Display the calculated loan details here */}
        </div>
      )}
    </div>
  );
}

export default LoanForm;
