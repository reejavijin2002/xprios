import React, { useState } from "react";
import Header from "../partials/Header";
import img1 from "../images/contact.png";
import video from "../../src/gif/videocontact.mp4";
import { Link } from "react-router-dom";
import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg";
import Headlinks from "./Headlinks";
import Footer from "./Footer";

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessMail: "",
    contactNo: "",
    company: "",
    message: "",
    country: "USA",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };



  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.businessMail) {
      newErrors.businessMail = "Business email is required";
    } else if (!isValidEmail(formData.businessMail)) {
      newErrors.businessMail = "Invalid email format";
    }

    if (!formData.contactNo) {
      newErrors.contactNo = "Phone number is required";
    }

    if (!formData.company) {
      newErrors.company = "Company name is required";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FirstName:",formData.firstName)
    console.log("LastName:",formData.lastName)
    console.log("BusinessMail:",formData.businessMail)

    console.log("ContactNo:",formData.contactNo)
    console.log("Company:",formData.company)
    console.log("Country:",formData.country)
    console.log("Message:",formData.message)




    if (validateForm()) {
    }
  };

  const isValidEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  };

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
                <div className="font-bold font-[poppins]">
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
      <Header />

      <div className="justify-center  md:flex xs:bg-white font-[poppins] md:p-0  xs:p-10">
        <div className="xs:mt-0 md:mt-5 xs:p-2 sm:p-5">
          <form
            className="   max-w-lg xs:p-2  sm:p-5 xs: bg-white text-black"
            onSubmit={handleSubmit}
          >
            <h1 className="  py-10 xs:py-3 md:text-4xl mb-0  text-black-500 sm:text-2xl xs:text-xl font-bold font-[poppins] text-fuchsia-700 ">
              Xprios Enterprise
            </h1>
            <h2 className="  py-10 xs:py-3 md:text-2xl mb-10  text-black-500 sm:text-1xl xs:text-xl font-normal font-[poppins] ">
              Join The Conversation,Take Our Surveys Today
            </h2>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-black border ${
                    errors.firstName ? "border-red-500" : "border-black-500"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  id="grid-first-name"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  
                  placeholder="firstname"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs italic">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-black border ${
                    errors.lastName ? "border-red-500" : "border-gray-200"
                  } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  id="grid-last-name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="lastname"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs italic">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="grid-business-email"
                >
                  Business email
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-black border ${
                    errors.businessMail ? "border-red-500" : "border-black-500"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  id="grid-business-email"
                  type="text"
                  name="businessMail"
                  value={formData.businessMail}
                  onChange={handleChange}
                  placeholder="example@example.com"
                />
                {errors.businessMail && (
                  <p className="text-red-500 text-xs italic">
                    {errors.businessMail}
                  </p>
                )}
              </div>
              <div className="w-full md-w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="grid-phone-number"
                >
                  Phone number
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-black border ${
                    errors.contactNo ? "border-red-500" : "border-gray-200"
                  } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  id="grid-phone-number"
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="phonenumber"
                />
                {errors.contactNo && (
                  <p className="text-red-500 text-xs italic">
                    {errors.contactNo}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md-w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="grid-company"
                >
                  Company
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-black border ${
                    errors.company ? "border-red-500" : "border-black-500"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  id="grid-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                />
                {errors.company && (
                  <p className="text-red-500 text-xs italic">
                    {errors.company}
                  </p>
                )}
              </div>
              <div className="w-full md-w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="grid-country"
                >
                  Country
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-black border ${
                    errors.country ? "border-red-500" : "border-gray-200"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  id="grid-country"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder=""
                />
                {errors.country && (
                  <p className="text-red-500 text-xs italic">
                    {errors.country}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="grid-message"
                >
                  Write Something
                </label>
                <input
                  className={`appearance-none block w-full bg-gray-200 text-black border ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  id="grid-message"
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs italic">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <button
                  type="submit"
                  className="bg-fuchsia-700  hover:bg-white hover:outline hover:text-fuchsia-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-  ml-2 md:w-1/2 mt-5">
          <div className=" md:p-11 md:pb-0 md:pr-2 xs:p-1 mb-0 md:text-4xl xs:text-2xl  font-bold font-[poppins] text-fuchsia-700">
            <h1>
              Make important business decisions with insight-based support.
            </h1>
          </div>
          <div className=" md:p-11 md:pb-0 md:pr-2 xs:p-1 md:text-2xl xs:text-xl text-black font-[poppins] font-normal  pb-0 ">
            <h5>
              {" "}
              Xpiros Enterprise allows you to get feedback from your target
              market, workers, and customers.
            </h5>
          </div>
          <ul className="md:p-11  md:pb-0 md:pr-2 font-[poppins] xs:p-1 pb-0">
            <li>
              Oversee numerous individuals and have access to all survey
              information gathered throughout your company.
            </li>

            <li>
              Make sure sensitive information is safeguarded using advanced
              security measures, such as encryption, SSO, and others.
            </li>
            <li>
              Automate feedback and use APIs and strong connectors to link it to
              important corporate processes.
            </li>
          </ul>
          <div className="md:p-10 md:pt-0.5 md:pb-0 md:pr-2 xs:p-0 m-10 pt-0">
            <img src={img1} alt="" height="600px" width="600px" className="" />
          </div>
          <div className="mt-5"></div>
        </div>
      </div>

      <div className="bg-white">
        <div className="sm:flex sm:p-10 font-[poppins] xs:p-5 sm:pb-5">
          <div className="sm:w-1/4">
            <p>Community:</p>
          </div>
          <div className="sm:w-3/4">
            <p>Creators Instagram Facebook Twitter LinkedIn Our BlogYouCam</p>
          </div>
        </div>
        <div className="sm:flex sm:p-10 font-[poppins] xs:p-5 sm:pb-5">
          <div className="sm:w-1/4">
            <p>Our story:</p>
          </div>
          <div className="sm:w-3/4">
            <p>
              Directory of LeadershipAppsPress RoomSurvey on Vision and
              MissionCollective , Inclusion, and DiversityHealth Scheme Honesty
              in ReportingOffice Addresses Remarkable Careers Map AsistRegister
              Sign Up
            </p>
          </div>
        </div>
        <div className="sm:flex sm:p-10 font-[poppins] xs:p-5 sm:pb-5">
          <div className="sm:w-1/4">
            <p>Guidelines:</p>
          </div>
          <div className="sm:w-3/4">
            <p>
              Rules of UsePrivacy StatementCalifornia Notice of PrivacyPolicy
              for Acceptable UsesSecurity ProclamationGDPR ConformityOpt-In
              Accessibility for EmailNotice about CookiesPersonalize
            </p>
          </div>
        </div>
        <div className="sm:flex sm:p-10 font-[poppins] xs:p-5 sm:pb-5">
          <div className="sm:w-1/4">
            <p>Apply Cases::</p>
          </div>
          <div className="sm:w-3/4">
            <p>
              Online SurveysSurveys on FacebookTemplate for Surveys: Planning
              PollsSurveyMonkey vs. Google FormsSurveys of employee
              satisfactionFree Templates for SurveysSurveys on the GoWays to
              Enhance Customer SupportCalculator for AB Test SignificanceNPS
              EstimatorSamples for QuestionnairesEvent Listing
            </p>
            <p>
              Calculator for Sample SizeCreating Quality SurveysLikert
              MeasureAnalysis of Surveys360-degree evaluationSurveys of
              EducationQuestions for SurveysNPS EstimationQuestions from the
              Customer Satisfaction SurveyQuestions about Agreed
              DisagreeEstablish a Survey
            </p>
            <p>
              Online testsResearch: Qualitative versus QuantitativeConsumer
              FeedbackSurveys for Market ResearchNPS Survey: Best Practices for
              Survey DesignCalculator for Error MarginQuestion MarkQuestions
              about DemographicsSurvey on TrainingSurvey360 Review Template for
              Offline Use
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 bg-white my-4 md:my-8"></div>


      <Footer/>

      {/* <div className="bg-white p-4 md:px-8 md:py-6">
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
      </div> */}
    </>
  );
};

export default MyForm;
