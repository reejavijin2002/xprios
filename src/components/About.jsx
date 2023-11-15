// AboutUs.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you have React Router for navigation
import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg";
import image from "../images/about1.jpg"

const AboutUs = () => {
  const [show, setShow] = useState(false);

  const showabouhandler = () => {
    setShow(true);
  };

  useEffect(() => {
    // Any side effects or lifecycle methods can go here
    return () => {
      // Cleanup functions can be added here if needed
    };
  }, []);

  return (
    <>
      <header className=" sticky top-0 bg-stone-100 dark:bg-[#030508] border-b border-slate-200 dark:border-slate-700 z-30 ">
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
      </header>
      <div className="bg-white min-h-screen w-full  flex items-center justify-center">
        <div className="max-w-full  bg-white shadow-lg rounded-md p-14">
          <h1 className="text-3xl font-extrabold  font-sans mb-4 text-center pb-5 mt-0 ">About Xprios Surveys</h1>
          <div className="md:flex">
          <div className="md:w-1/2 xs:w-full md:p-5 sm:p-3 xs:p-1">
          <p className="text-gray-700 mb-6">
            Xprios Surveys is your go-to platform for creating, managing, and
            analyzing surveys with ease. Whether you're conducting market
            research, gathering customer feedback, or evaluating employee
            satisfaction, our feature-rich platform empowers you throughout the
            entire survey process.
          </p>

          <img src={image} alt="" height="200px" width="auto"/>
          </div>
          <div  className="md:w-1/2 xs:w-full md:p-5 sm:p-3 xs:p-1">


          {/* Section 1: Survey Creation */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Survey Creation</h2>
            <p>
              Effortlessly create surveys using a variety of questions tailored
              to your needs.
            </p>
          </div>

          {/* ... (Repeat similar sections for other features) */}

          {/* Section 15: Languages */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Languages</h2>
            <p>
              Empower your survey experiences with our multilingual options.
              Engage respondents with our multilingual support for comprehensive
              insights.
            </p>
          </div>

          {/* Section 16: Survey Templates */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Survey Templates</h2>
            <p>
              Gain access to a range of pre-built questionnaires designed by our
              team of research experts. Explore a vast library comprising
              customer and employee satisfaction surveys, website feedback
              surveys, Net Promoter Score surveys, and more.
            </p>
          </div>

          {/* Hover effect for Learn More link */}
          <div className="text-center">
            <Link
              to="#"
              className="text-fuchsia-700 hover:underline hover:text-fuchsia-500"
            >
              Learn More
            </Link>
          </div>
          <div className="mt-5">
        <Link
          to="/"
          className="py-2 px-4 w-[200px] text-white bg-fuchsia-700  rounded-md font-semibold hover:bg-fuchsia-500 block"
        >
          Go back
        </Link>
      </div>
          </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 md:px-8 md:py-6">
        <div className=" my-4 md:my-8"></div>
        <div className="md:flex p-10 py-5">
          <div>
            <p className="text-gray-600 md:px-20">
              Got questions or feedback? We'd love to hear from you! Reach out
              to our team at{" "}
              <a href="mailto:your@email.com" className="text-blue-500">
                Xprios@email.com
              </a>{" "}
              or connect with us on:
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              We're here to make your survey experience better.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
