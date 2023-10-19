

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoanForm from './components/LoanForm';
import LoanResults from './components/LoanResults';
//import ComparisonTable from './components/ComparisonTable';
import Home from './components/Home'



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loanform" element={<LoanForm />} />
        <Route path="/loanresults" element={<LoanResults />} />
        
      </Routes>
    </Router>
  );
}

export default App;
