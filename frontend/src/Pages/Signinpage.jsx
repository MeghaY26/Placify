import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const SigninForm = () => {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data
    if (!signinEmail || !signinPassword) {
      setMessage("Please fill in all fields");
      return;
    }
    // Send form data to backend
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: signinEmail,
        password: signinPassword,
      });
      // Display success message and navigate
      setMessage(response.data.message);
      //console.log(response.data.message);
      if (response.data.success) {
        console.log(response.data.success);
        navigate("/calender");
      }
    } catch (error) {
      // Display error message
      setMessage(error.response.data);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input
          type="email"
          placeholder="Email"
          value={signinEmail}
          onChange={(event) => setSigninEmail(event.target.value)}
        />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faLock} className="icon" />
        <input
          type="password"
          placeholder="Password"
          value={signinPassword}
          onChange={(event) => setSigninPassword(event.target.value)}
        />
      </div>
      <input type="submit" value="Login" className="btn solid" />
    </form>
    <h1>{message}</h1>
    </div>

  );
};

export default SigninForm;
