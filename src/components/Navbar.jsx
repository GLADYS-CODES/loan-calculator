
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-semibold text-white">Loan Calculator</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/loanform" className="nav-link">
                LoanForm
              </Link>
              <Link to="/loanresults" className="nav-link">
                LoanResults
              </Link>
              <Link to="/comparisontable" className="nav-link">
                ComparisonTable
              </Link>
            </div>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="hamburger-btn flex items-center px-3 py-2 border rounded text-white border-blue-900 hover:text-white hover:bg-blue-900 focus:outline-none transition duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="w-5 h-5" />
              ) : (
                <FiMenu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 transition duration-300">
          <div className="flex flex-col items-center py-2 space-y-2">
            <Link
              to="/loanform"
              className="nav-link-mobile"
              onClick={toggleMenu}
            >
              LoanForm
            </Link>
            <Link
              to="/loanresults"
              className="nav-link-mobile"
              onClick={toggleMenu}
            >
              LoanResults
            </Link>
            <Link
              to="/comparisontable"
              className="nav-link-mobile"
              onClick={toggleMenu}
            >
              ComparisonTable
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
