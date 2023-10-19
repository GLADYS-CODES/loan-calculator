import React, { useEffect, useState } from 'react';
import LoanResults from './LoanResults';

const LoanResultsContainer = () => {
  const [loanResults, setLoanResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from  backend API
    fetch('/api/loan-results') // Replace with  actual API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setLoanResults(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        loanResults && <LoanResults results={loanResults} />
      )}
    </div>
  );
};

export default LoanResultsContainer;
