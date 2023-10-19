
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Add password state
  const [rememberMe, setRememberMe] = useState(false); // Remember Me state
  const [error, setError] = useState(''); // Error state

  const handleLogin = () => {
    setError(''); // Reset error message
    // Validate user input and perform any necessary checks
    if (name && email && password) {
      // Redirect to the Loan Form page with user details
      navigate('/loanform', { state: { name, email } });
    } else {
      setError('Please fill in all fields.');
    }
  };

  const handleSignUp = () => {
    setError(''); // Reset error message
    // Validate user input and perform any necessary checks
    if (name && email && password) {
      // Redirect to the Loan Form page with user details
      navigate('/loanform', { state: { name, email } });
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className="bg-blue-400 h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl text-center mb-4">Welcome to the Loan Calculator</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form className="mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rememberMe" className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
          </div>
          <div className="mb-4">
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
              onClick={handleLogin}
            >
              Log In
            </button>
          </div>
          <div className="mb-4">
            <button
              type="button"
              className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
