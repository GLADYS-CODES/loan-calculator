

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoanForm from './components/LoanForm';
import LoanResults from './components/LoanResults';
import ComparisonTable from './components/ComparisonTable';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/loanform" element={<LoanForm />} />
        <Route path="/loanresults" element={<LoanResults />} />
        <Route path="/comparisontable" element={<ComparisonTable />} />
      </Routes>
    </Router>
  );
}

export default App;
