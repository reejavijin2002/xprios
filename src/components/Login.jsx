// Login.js

import React from 'react';
import { Link } from 'react-router-dom';
import img from "../images/login.jpg";

const Login = () => {
  return (
    <div className='bg-white'>
      <div className='md:flex w-full'>
        {/* Image Section */}
        <div className='md:w-1/2 sm:w-full'>
          <img src={img} alt='' className='max-w-full' />
        </div>

        {/* Login Section */}
        <div className="min-h-screen flex items-center justify-center w-full md:w-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="max-w-md p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full border p-2 rounded-md"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border p-2 rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <Link to="/dashboardarrange">
                <button
                  type="submit"
                  className="w-full bg-fuchsia-700 text-white p-2 rounded-md hover:bg-fuchsia-700"
                >
                  Login
                </button>
              </Link>
              <Link to="/">
                <button
                  type="submit"
                  className="w-full mt-5 bg-fuchsia-700 text-white p-2 rounded-md hover:bg-fuchsia-700"
                >
                  Go back
                </button>
              </Link>
            </form>
            <div className="mt-4 text-center">
              <p>
                Don't have an account?{' '}
                <Link to="/signup" className="text-fuchsia-700 hover:underline">
                  Create New Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


