import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg";
import surveyCreationImage from "../images/survey.jpg";
import dashboardsImage from "../images/dash.jpg";
import qrCodeImage from "../images/qr.jpg";
import smsImage from "../images/message1.jpg";
import realTimeReportImage from "../images/charts.jpg";
import Headlinks from "./Headlinks";
import Header from "../partials/Header";

const Feature = ({ title, description, imageSrc }) => {
  return (
    <div className="mb-8 p-6 rounded-md border  border-stone-100 bg-stone-100 hover:shadow-md hover:border-blue-500">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-36 object-cover mb-4"
      />
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const FeaturesPage = () => {
  return (
    <>
      {/* <header className="sticky top-0 bg-stone-100 dark:bg-[#030508] border-b border-slate-200 dark:border-slate-700 z-30">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
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
      <div className="bg-white min-h-screen py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl font-extrabold font-[poppins] text-center mb-8">
            Xprios Survey Features
          </h1>

          <div className="grid grid-cols-1 font-[poppins] md:grid-cols-2 lg:grid-cols-3  gap-8">
            <Feature
              title="Survey Creation"
              description="Create surveys easily using a variety of questions tailored to your needs."
              imageSrc={surveyCreationImage}
            />

            <Feature
              title="Dashboards"
              description="Empower your decision-making process with dynamic dashboards linked to real-time data."
              imageSrc={dashboardsImage}
            />

            <Feature
              title="QR Code"
              description="Enhance survey outreach by incorporating QR codes in flyers, posters, or ads."
              imageSrc={qrCodeImage}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 font-[poppins] lg:grid-cols-3 gap-8 mt-8">
            <Feature
              title="SMS"
              description="Optimize survey outreach with personalized SMS invitations containing unique short URLs."
              imageSrc={smsImage}
            />

            <Feature
              title="Real-time Report with Charts"
              description="Effortlessly access real-time reports featuring interactive charts immediately upon survey launch."
              imageSrc={realTimeReportImage}
            />
          </div>
          <div className="mt-5">
            
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

export default FeaturesPage;
