import React, { useState } from "react";

import Header from "../partials/Header";
import image from "../images/Meeting-amico.png";
import SurveyTemplatesComponent from "../components/SurveyTemplate";
import Defferent from "../components/Defferent";
import Seeit from "../components/Seeit";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
    <div className="bg-stone-100">
      <div className="shadow-slate-700 ">
        <div className="relative flex flex-col flex-1  ">
          <Header />
          <div className="md:flex sm:p-8 xs:p-4  md:p-10 xs:bg-white">
            <div div className="md:w-1/2 sm:w-full xs:w-full md:p-5">
              <h1 className="md:text-4xl sm:text-2xl xs:text-2xl xs:py-4 font-sans font-extrabold md:py-7 text-fuchsia-700">
                Join The Conversation,Take Our Surveys Today
              </h1>
              <h4 className="md:text-2xl sm:text-2xl xs:text-xl xs:py-2  font-semibold md:py-3">
                In a world of questions, surveys hold the answers
              </h4>
              <div className="flex">
                <div>
                  <button className="p-3 md:mr-4 xs:mr-1 bg-fuchsia-700 rounded-md border-solid border-black text-white font-bold w-35 ">
                    Get start with us
                  </button>
                </div>
                <div>
                  <button className="p-3 mr-1  border border-fuchsia-700 text-fuchsia-700 rounded-lg  font-bold w-35">
                    Sign up for free
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
      <Defferent/>
      <Seeit/>
      <Testimonials/>
      <Footer/>
      </div>

    </>
  );
}

export default Dashboard;
