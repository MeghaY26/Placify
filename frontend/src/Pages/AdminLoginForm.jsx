import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Import axios
import '../CSS/AdminLoginForm.css';

const AdminLogin = () => {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/adminlogin', {
        suseremail: useremail,
        spassword: password,
      });
      console.log(useremail);
      // Handle response from the server
      console.log("Response:", response.data);

      if (response.data.success) {
        console.log("Login successful");
        navigate("/companydetails");
      } else {
        console.log("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
      // Handle error response
    }
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSignInSubmit} className="sign-in-form">
            <h2 className="title">Sign in (Admin)</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="email"
                placeholder="Admin email"
                value={useremail}
                onChange={(e) => setUseremail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
