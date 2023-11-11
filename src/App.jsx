import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import SurveyModal from './components/SurveyModal';
import MyForm from './components/ContactUs';
import AboutUs from './components/About';
import Features from './components/Features';
import Template from './components/Template';
import Login from './components/Login';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/contact" element={<MyForm />} />
        <Route exact path="/About" element={<AboutUs/>} />
        <Route exact path="/Features" element={<Features/>} />
        <Route exact path="/Template" element={<Template/>} />
        <Route exact path="/Login" element={<Login/>} />


        


        <Route exact path="/dashboard" element={<SurveyModal />} />
        <Route exact path="/dashboard/createsurvey" element={<SurveyModal />} />
      </Routes>
    </>
  );
}

export default App;
