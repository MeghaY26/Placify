import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Signup.css';

const Signuppage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const [name, setName] = useState("");
  const [usn, setUSN] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data
    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    // Send form data to backend
    try {
      const response = await axios.post("http://localhost:3001/signup", {
        name,
        usn,
        email,
        phno,
        password,
      });
      // Display success message
      setMessage(response.data);
      if(response.data === "User successfully registered"){
        navigate("/calender");
      }
    } catch (error) {
      // Display error message
      setMessage(error.response.data);
    }
  };

  const handleSignin = async (e) => {
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
      if (response.data.success) {
        navigate("/calender");
      }
    } catch (error) {
      // Display error message
      setMessage(error.response.data);
    }
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          
          <form onSubmit={handleSignin} className={`sign-in-form ${isSignUpMode ? 'hidden' : ''}`}>
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
          
          <form onSubmit={handleSubmit} className={`sign-up-form ${isSignUpMode ? '' : 'hidden'}`}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                required
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                placeholder="USN"
                value={usn}
                onChange={(e) => setUSN(e.target.value)}
                id="usn"
                name="usn"
                required
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                placeholder="Phone Number"
                value={phno}
                onChange={(e) => setPhno(e.target.value)}
                id="phone"
                name="phone"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                required
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                required
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="confirm_password"
                name="confirm_password"
                required
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
          <h2>{message}</h2>
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
            <h2>New one?</h2>
            <p></p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
        </div>
        <div className={`panel right-panel ${isSignUpMode ? '' : 'hidden'}`}>
          <div className="content">
            <h3>Get a chance to explore And discover</h3>
            <p></p>
            <h3>Various ways to enhance yourself</h3>
            <p></p>
            <p></p>
            <h2>Already have an account?</h2>
            <p></p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
