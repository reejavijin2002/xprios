import React from 'react';
import { Link } from 'react-router-dom';

const Landingicon = () => {
  return (
    <div className="flex items-center bg-stone-300 pt-10 font-[poppins] space-y-4 h-screen flex-col">
       <div>
        <Link
          to="/"
          className="py-2 px-4 w-[200px] text-white bg-fuchsia-700 rounded-md font-semibold hover:bg-fuchsia-500 block"
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          to="/About"
          className="py-2 px-4 w-[200px] text-white bg-fuchsia-700 rounded-md font-semibold hover:bg-fuchsia-500 block"
        >
          About
        </Link>
      </div>
      <div>
        <Link
          to="/Template"
          className="py-2 px-4 w-[200px] text-white bg-fuchsia-700 rounded-md font-semibold hover:bg-fuchsia-500 block"
        >
          Templates
        </Link>
      </div>
      <div>
        <Link
          to="/Features"
          className="py-2 px-4 w-[200px] text-white bg-fuchsia-700 rounded-md font-semibold hover:bg-fuchsia-500 block"
        >
          Features
        </Link>
      </div>
      <div>
        <Link
          to="/contact"
          className="py-2 px-4 w-[200px] text-white bg-fuchsia-700 rounded-md font-semibold hover:bg-fuchsia-500 block"
        >
          Contact
        </Link>
      </div>
      <div>
        <Link
          to="/Login"
          className="py-2 px-4 w-[200px] text-white bg-fuchsia-700 rounded-md font-semibold hover:bg-fuchsia-500 block"
        >
          Login
        </Link>
      </div>
     
    </div>
  );
};

export default Landingicon;

