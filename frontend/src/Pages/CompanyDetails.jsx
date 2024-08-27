import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../CSS/AdminLoginForm.css';

const AddCompanyDetails = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const [companyName, setCompanyName] = useState('');
  const [designation, setDesignation] = useState('');
  const [packageValue, setPackageValue] = useState('');
  const [location, setLocation] = useState('');
  const [applyBefore, setApplyBefore] = useState('');
  const [stream, setStream] = useState('');
  const [maxBacklogs, setMaxBacklogs] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValues = {
      companyName,
      designation,
      package: packageValue,
      location,
      applyBefore,
      stream,
      maxBacklogs,
      description,
    };
    console.log('Form submitted:', formValues);

    try {
      const response = await axios.post('http://localhost:3000/companydetails', formValues);
      console.log('Response:', response.data);
      navigate("/smsform");
      // Handle response from the server, e.g., show a success message
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      // Handle error response, e.g., show an error message
    }
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className={`sign-up-form ${isSignUpMode ? '' : 'hidden'}`}>
            <h2 className="title">Company details</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                name="package"
                placeholder="Package"
                value={packageValue}
                onChange={(e) => setPackageValue(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="date"
                name="applyBefore"
                placeholder="Apply before"
                value={applyBefore}
                onChange={(e) => setApplyBefore(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="text"
                name="stream"
                placeholder="Key_skills"
                value={stream}
                onChange={(e) => setStream(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="text"
                name="maxBacklogs"
                placeholder="Max Backlogs"
                value={maxBacklogs}
                onChange={(e) => setMaxBacklogs(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                rows="3"
                cols="50"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className={`panel left-panel ${isSignUpMode ? 'hidden' : ''}`}>
          <div className="content">
            <h3>Get a chance to explore And discover</h3>
            <p></p>
            <h3>Various ways to enhance yourself</h3>
            <p></p>
            <p></p>
            <h2>Want to add company details?</h2>
            <p></p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCompanyDetails;
