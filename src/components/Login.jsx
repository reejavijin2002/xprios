// Login.js

import React from 'react';
import { Link } from 'react-router-dom';
// import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg";
import img from "../images/login.jpg"

const Login = () => {
  return (
    <div className='bg-white'>
         {/* <header className=" sticky top-0 bg-stone-100 dark:bg-[#030508] border-b border-slate-200 dark:border-slate-700 z-30 ">
        <div className="px-4 ">
          <div className="flex items-center justify-between h-16 ">
            <Link to="/">
              <div className="flex">
                <div>
                  <img src={logo} alt="" width="30px" height="30px" />
                </div>{" "}
                <div className="font-bold ">
                  <h3>XPRIOS</h3>
                </div>
              </div>
            </Link>

            <div className="flex items-center space-x-3">
              <div></div>
            </div>
          </div>
        </div>
      </header> */}
      <div className='md:flex w-full'>
      <div className='md:w-1/2  sm:w-full'>
        <div><img src={img} alt='' height="100px"  /></div>
                
      </div>
      <div className="min-h-screen flex items-center justify-center w-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="max-w-md  p-6 bg-white rounded-md shadow-md">
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
          <button
            type="submit"
            className="w-full bg-fuchsia-700 text-white p-2 rounded-md hover:bg-fuchsia-700"
          >
            Login
          </button>
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

