import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calender from "./Pages/Calender";
import Applications from "./Pages/Applications";
import Documents from "./Pages/Documents";
import Questions from "./Pages/leetcode";
import Projects from "./Pages/Projects";
import AdminLoginForm from './Pages/AdminLoginForm';
import About from "./Components/About/About";
import Practice from "./Components/Practice/Practice";
import Contact from "./Components/Contact/Contact";
import AddCompanyDetails from './Pages/CompanyDetails';
import McqPage from './Pages/McqPage';
import Signuppage from './Pages/Signuppage';
import Homepage from './Pages/homepage';
import Signinpage from './Pages/Signinpage';
import Resources from './Pages/Resources';
import SmsForm from './Pages/SmsForm';
import JobDetails from './Components/JobDetails';
import DBMS from "./Pages/DBMS";
import OS from "./Pages/OS";
import Aptitude from "./Pages/Aptitude";


function App() {
  const location = useLocation();
  const pathsWithSidebar = ["/team", "/calender", "/documents", "/projects", "/companydetails", "/adminform", "/mcqpage", "/applied","/smsform"];
  const showSidebar = pathsWithSidebar.includes(location.pathname);

  return (
    <>
      {showSidebar && <Sidebar />}
    
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path="" element={<Homepage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/otherpage" element={<Questions />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/companydetails" element={<AddCompanyDetails />} />
            <Route path="/adminform" element={<AdminLoginForm />} />
            <Route path="/signin" element={<Signinpage />} />
            <Route path="/signup" element={<Signuppage />} />
            <Route path="/mcqpage" element={<McqPage />} />
            <Route path="/dbms" element={<DBMS/>} />
            <Route path="/os" element={<OS/>} />
            <Route path="/apti" element={<Aptitude/>} />
            <Route path="/smsform" element={<SmsForm />} />
            <Route path="/applied" element={<Applications />} />
            <Route path="/job/:id" element={<JobDetails/>} />
          </Routes>
        </AnimatePresence>
      
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
