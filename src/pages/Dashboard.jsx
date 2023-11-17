import React, { useState } from "react";

import Header from "../partials/Header";
import image from "../images/Meeting-amico.png";
import SurveyTemplatesComponent from "../components/SurveyTemplate";
import Defferent from "../components/Defferent";
import Seeit from "../components/Seeit";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="bg-stone-100">
        <div className="shadow-slate-700 ">
          <div className="relative flex flex-col flex-1  ">
            <Header />
            <div className="md:flex sm:p-8 xs:p-4  md:p-10 xs:bg-white">
              <div div className="md:w-1/2 sm:w-full xs:w-full md:p-5">
                <h1 className="md:text-4xl sm:text-2xl xs:text-xl xs:py-4 font-[poppins] font-extrabold md:py-7 text-fuchsia-700">
                  Join The Conversation,Take Our Surveys Today
                </h1>
                <h4 className="md:text-xl sm:text-lg xs:text-sm xs:py-2 font-[poppins]  text-gray-600 xs:font-medium sm:font-medium md:py-3">
                  In a world of questions, surveys hold the answers
                </h4>
                <div className="flex">
                  <div>
                  <Link to="/Login">
                    <button className="md:p-3 md:text-lg md:mr-4 xs:mr-1 bg-fuchsia-700 xs:text-xs font-[poppins] xs:p-2 mt-5 rounded-md hover:bg-white hover:outline hover:text-fuchsia-700 border-solid border-black text-white font-normal w-35 ">
                    Sign up for free
                    </button>
                    </Link>
                  </div>
                  <div>
                    
                      <button className="md:p-3 md:text-lg mr-1  border border-fuchsia-700 xs:text-xs font-[poppins] xs:p-2 mt-5 text-fuchsia-700 rounded-lg  font-normal w-35">
                       Get start
                      </button>
                   
                  </div>
                </div>
              </div>
              <div className="">
                {" "}
                <img src={image} alt="" width="500px" height="450px" />
              </div>
            </div>
          </div>
        </div>

        <SurveyTemplatesComponent />
        <Defferent />
        <Seeit />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
