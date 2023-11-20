import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import customer from "../images/customer1.jpg";
import employee from "../images/employee.jpg";
import market from "../images/market.jpg";
import event from "../images/event.jpg";
import education from "../images/education.jpg";
import health from "../images/health.jpg";
import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg";
import Headlinks from "./Headlinks";
import Header from "../partials/Header";
import Footer from "./Footer";

const Template = () => {
  const surveyTemplates = [
    {
      title: "Customer Satisfaction",
      description:
        "Enhance user experience and measure client happiness to improve products and overall business performance.",
      // link: "/customer-satisfaction",
      image: customer,
    },
    {
      title: "Employee Engagement",
      description:
        "Build a healthy company culture by understanding how to retain top talent and foster workforce participation.",
      // link: "/employee-engagement",
      image: employee,
    },
    {
      title: "Market Research",
      description:
        "Stay ahead of the competition by keeping track of industry trends, conducting market studies, and analyzing competitor research.",
      // link: "/market-research",
      image: market,
    },
    {
      title: "Event Planning",
      description:
        "Gather feedback before, during, and after events to ensure successful event organization and improve future gatherings.",
      // link: "/event-planning",
      image: event,
    },
    {
      title: "Education and Schools",
      description:
        "Improve academic programs and processes in learning organizations by collecting insights and feedback from students and staff.",
      // link: "/education-and-schools",
      image: education,
    },
    {
      title: "Healthcare",
      description:
        "Support patient-provider communication and enhance healthcare services by obtaining feedback on medical care and patient well-being.",
      // link: "/healthcare",
      image: health,
    },
  ];

  return (
    <>
      {/* <header className="sticky top-0 bg-stone-100 dark:bg-[#030508]  border-b border-slate-200 dark:border-slate-700 z-30 ">
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
          

            <div className="flex items-center space-x-3"></div>
          </div>
        </div>
      </header> */}
      <Header/>
      <h1 className="text-center md:text-4xl pt-10 md:pl-80 md:pr-80 sm:text-2xl xs:text-xl bg-white font-[poppins] font-extrabold pb-10 w-full">
        Obtain Survey Templates To Aid In Your Initial Steps
      </h1>
      
      <div className="grid  bg-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 ">
        {surveyTemplates.map((template, index) => (
          
          <div
            key={index}
            className=" bg-white rounded-lg font-[poppins] overflow-hidden shadow-md "
          >
            <a href={template.link}>
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-52 object"
              />
            </a>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                {template.title}
              </h2>
              <p className="text-gray-600">{template.description}</p>
            </div>
          </div>
          
        ))}
        <div className="mt-5">
         
        </div>
      </div>
      <div className="border-t border-gray-100 bg-white my-4 md:my-8"></div>

      <Footer/>
      {/* <div className="bg-white p-4 md:px-8 md:py-6">
        <div className="border-t border-gray-300 font-[poppins] my-4 md:my-8"></div>
        <div className="md:flex p-10 py-5 font-[poppins]">
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
      </div> */}
    </>
  );
};

export default Template;
