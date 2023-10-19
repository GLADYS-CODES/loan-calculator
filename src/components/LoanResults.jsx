
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import emailjs from 'emailjs-com';

const LoanResults = () => {
  const [data, setData] = useState([]);
  const [takeHomeAmount, setTakeHomeAmount] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4xvbm59')
      .then((result) => {
        console.log('Email sent successfully', result.text);
      }, (error) => {
        console.log('Error while sending Email', error.text);
      });
  }

  // useEffect(() => {
  //   // Fetch loan calculation data from your Ruby on Rails backend
  //   fetch('')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Assuming your data has a structure similar to the dummy data
  //       setData(data);

  //       // Update the Take Home Amount in the component's state
  //       setTakeHomeAmount(data.takeHomeAmount);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  const columns = [
    {
      name: 'Bank',
      selector: (row) => row.bank,
      sortable: true,
    },
    {
      name: 'Loan ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Borrower's Name",
      selector: (row) => row.borrowerName,
      sortable: true,
    },
    {
      name: 'Loan Amount',
      selector: (row) => row.loanAmount,
      sortable: true,
    },
    {
      name: 'Payment Frequency',
      selector: (row) => row.paymentFrequency,
      sortable: true,
    },
    {
      name: 'Loan Period (Tenure)',
      selector: (row) => row.loanPeriod,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: 'Interest Type',
      selector: (row) => row.interestType,
      sortable: true,
    },
    {
      name: 'Interest Rate',
      selector: (row) => row.interestRate,
      sortable: true,
    },
    {
      name: 'Total Interest Paid',
      selector: (row) => row.totalInterestPaid,
      sortable: true,
    },
    {
      name: 'Installment Amount',
      selector: (row) => row.installmentAmount,
      sortable: true,
    },
    {
      name: 'Take Home Amount',
      selector: (row) => row.takeHomeAmount,
      sortable: true,
    },
  ];

  return (
    <div>
      <DataTable title="Loan Calculation Results" columns={columns} data={data} pagination responsive />
      {/* Email form */}
      <form onSubmit={sendEmail} className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email Address:</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 border rounded-lg focus:ring focus:ring-indigo-200"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default LoanResults;
