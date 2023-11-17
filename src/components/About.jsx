// AboutUs.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you have React Router for navigation
import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg";
import image from "../images/about1.jpg";
import Headlinks from "./Headlinks";
import Header from "../partials/Header";

const AboutUs = () => {
  const [show, setShow] = useState(false);

  const showabouhandler = () => {
    setShow(true);
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      {/* <header className=" sticky top-0 bg-stone-100 dark:bg-[#030508] border-b border-slate-200 dark:border-slate-700 z-30 ">
        <div className="px-4 ">
          <div className="flex items-center justify-between h-16 ">
            <Link to="/">
              <div className="flex">
                <div>
                  <img src={logo} alt="" width="30px" height="30px" />
                </div>{" "}
                <div className="font-bold font-[poppins] ">
                  <h3>XPRIOS</h3>
                </div>
                <div className="pl-56"> <Headlinks/></div>

              </div>
             
            </Link>

            <div className="flex items-center space-x-3">
              <div></div>
            </div>
          </div>
        </div>
      </header> */}
      
      <Header/>
      
      <div className="bg-white min-h-screen w-full  flex items-center justify-center">
        <div className="max-w-full  bg-white  rounded-md p-14">
          <h1 className="text-3xl font-extrabold  font-[poppins] mb-4 text-center pb-5 mt-0 ">
            About Xprios Surveys
          </h1>
          <div className="md:flex">
            <div className="md:w-1/2 xs:w-full md:p-5 sm:p-3 xs:p-1">
              <p className="text-gray-700 font-[poppins] mb-6">
                Xprios Surveys is your go-to platform for creating, managing,
                and analyzing surveys with ease. Whether you're conducting
                market research, gathering customer feedback, or evaluating
                employee satisfaction, our feature-rich platform empowers you
                throughout the entire survey process.
              </p>

              <img src={image} alt="" height="200px" width="auto" />
            </div>
            <div className="md:w-1/2 xs:w-full md:p-5 sm:p-3 xs:p-1">
              <div className="mb-6">
                <h2 className="text-xl font-[poppins] font-bold mb-2">
                  Survey Creation
                </h2>
                <p className="font-[poppins]">
                  Effortlessly create surveys using a variety of questions
                  tailored to your needs.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-[poppins] font-bold mb-2">
                  Languages
                </h2>
                <p className="font-[poppins]">
                  Empower your survey experiences with our multilingual options.
                  Engage respondents with our multilingual support for
                  comprehensive insights.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-[poppins] font-bold mb-2">
                  Survey Templates
                </h2>
                <p className="font-[poppins]">
                  Gain access to a range of pre-built questionnaires designed by
                  our team of research experts. Explore a vast library
                  comprising customer and employee satisfaction surveys, website
                  feedback surveys, Net Promoter Score surveys, and more.
                </p>
              </div>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="text-fuchsia-700 hover:underline font-[poppins] hover:text-fuchsia-500"
                >
                  Learn More
                </Link>
              </div>
              <div className="mt-5">
                
                 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 md:px-8 md:py-6">
      <div className="border-t border-gray-300 my-4 md:my-8"></div>
        <div className="md:flex p-10 py-5">
          <div>
            <p className="text-gray-600 font-[poppins] md:px-20">
              Got questions or feedback? We'd love to hear from you! Reach out
              to our team at{" "}
              <a
                href="mailto:your@email.com"
                className="text-blue-500 font-[poppins]"
              >
                Xprios@email.com
              </a>{" "}
              or connect with us on:
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-[poppins]">
              We're here to make your survey experience better.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
