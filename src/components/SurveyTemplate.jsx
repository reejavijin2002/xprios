import React from 'react';
import customer from '../images/customer.jpg'
import employee from '../images/employee.jpg'
import market from '../images/market.jpg'

import event from '../images/event.jpg'

import education from '../images/education.jpg'
import health from '../images/health.jpg'






const SurveyTemplatesComponent = () => {
  const surveyTemplates = [
    {
      title: "Customer Satisfaction",
      description: "Enhance user experience and measure client happiness to improve products and overall business performance.",
      link: "/customer-satisfaction",
      image: customer,
    },
    {
      title: "Employee Engagement",
      description: "Build a healthy company culture by understanding how to retain top talent and foster workforce participation.",
      link: "/employee-engagement",
      image: employee,
    },
    {
      title: "Market Research",
      description: "Stay ahead of the competition by keeping track of industry trends, conducting market studies, and analyzing competitor research.",
      link: "/market-research",
      image: market,
    },
    {
      title: "Event Planning",
      description: "Gather feedback before, during, and after events to ensure successful event organization and improve future gatherings.",
      link: "/event-planning",
      image: event,
    },
    {
      title: "Education and Schools",
      description: "Improve academic programs and processes in learning organizations by collecting insights and feedback from students and staff.",
      link: "/education-and-schools",
      image: education,
    },
    {
      title: "Healthcare",
      description: "Support patient-provider communication and enhance healthcare services by obtaining feedback on medical care and patient well-being.",
      link: "/healthcare",
      image: health,
    },
   
  ];

  return (
    <>
    <h1 className='text-center md:text-4xl pt-10 md:pl-80 md:pr-80 sm:text-2xl xs:text-xl bg-stone-100 font-sans font-extrabold pb-10 w-full'>Obtain Survey Templates To Aid In Your Initial Steps</h1>
    <div className="grid  bg-stone-100 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {surveyTemplates.map((template, index) => (
       
       
        <div key={index} className=" bg-white rounded-lg overflow-hidden shadow-md">
          <a href={template.link}>
            <img src={template.image} alt={template.title} className="w-full h-36 object" />
          </a>
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-700 mb-2">{template.title}</h2>
            <p className="text-gray-600">{template.description}</p>
          </div>
        </div>
       
      ))}
      
    </div>
    </>
  );
};

export default SurveyTemplatesComponent;
