

import React, { useState } from 'react';
import './login.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [showSignInForm, setShowSignInForm] = useState(true);
  const navigate = useNavigate();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setconfirmpassword(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setmobilenumber(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();

    // Perform signup request with username, email, and password values
    const data = {
      email, password
    };
   

  axios.post('http://localhost:5000/login', data)
  .then((res) => {
    
    console.log(res);        
   localStorage.setItem('token',res.data.token)
   console.log(localStorage)
   
  
    

    window.alert("Login Successfully");
    navigate("/admin-home");
  })
  .catch(error => {
    console.error('Error saving data:', error);
    window.alert("Invalid Credentials");
  }).catch(error => {
        console.error('Error saving data:', error);
        window.alert("Invalid Credentials")
      });
  };

  const handleSignUp = (event) => {
    // handle sign up logic

    event.preventDefault();
    const dataforregister = { name, mobilenumber, password, confirmpassword, email }
    // Perform signup request with username, email, and password values
    axios
      .post('http://localhost:5000/register', dataforregister)
      .then((response) => {
        console.log(response.data);
        window.alert('Registration successful');
      })
      .catch((error) => {
        console.error(error);
        window.alert('Registration failed');
      });
  };

  const handleTabChange = (event) => {
    if (event.target.id === 'tab-1') {
      setShowSignInForm(true);
    } else if (event.target.id === 'tab-2') {
      setShowSignInForm(false);
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked={showSignInForm} onChange={handleTabChange} />
        <label htmlFor="tab-1" className="tab">
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" checked={!showSignInForm} onChange={handleTabChange} />
        <label htmlFor="tab-2" className="tab">
          Sign Up
        </label>
        <div className="login-form">
          {showSignInForm ? (
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="email" className="email">
                  Email
                </label>
                <input id="email" type="text" className="input" value={email} onChange={handleEmailChange} />
              </div>
              <div className="group">
                <label htmlFor="password" className="password">
                  Password
                </label>
                <input id="password" type="password" className="input" data-type="password" value={password} onChange={handlePasswordChange} />
              </div>
              {/* <div className="group">
                <input id="check" type="checkbox" className="check" defaultChecked />
                <label htmlFor="check">
                  <span className="icon" /> Keep me Signed in
                </label>
              </div> */}
              <div className="group">
                <input type="submit" className="button" defaultValue="Sign In" onClick={handleSignIn} />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
          ) : (
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Name
                </label>
                <input id="user" type="text" className="input" value={name} onChange={handleNameChange} />
              </div>
            <div className="group">
                <label htmlFor="email" className="label">Email</label>
                <input id="email" type="text" className="input" value={email} onChange={handleEmailChange} />
            </div>
            <div className="group">
                <label htmlFor="password" className="label">Password</label>
                <input id="password" type="password" className="input" data-type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="group">
                <label htmlFor="confirmpassword" className="label">Confirm Password</label>
                <input id="confirmpassword" type="password" className="input" data-type="password" value={confirmpassword} onChange={handleConfirmPasswordChange} />
            </div>
            <div className="group">
                <label htmlFor="mobilenumber" className="label">Mobile Number</label>
                <input id="mobilenumber" type="text" className="input" value={mobilenumber} onChange={handleMobileNumberChange} />
            </div>
            <div className="group">
                <input type="submit" className="button" defaultValue="Sign Up" onClick={handleSignUp} />
            </div>
            <div className="hr" />
                <div className="foot-lnk">
                    <label htmlFor="tab-1">Already Member?</label>
                </div>
            </div>
            )}
        </div>
    </div>
</div>
);
}

export default Login;
