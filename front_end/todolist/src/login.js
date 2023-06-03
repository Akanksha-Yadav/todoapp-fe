import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Outlet, Link } from "react-router-dom";
import "./login.css";
import App from "./App";
import { useNavigate } from "react-router-dom";

function Login() {
  // React States
  const navigate = useNavigate();

  const [errorUname, setErrorUname] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setname]=useState("")
  const [pass, setpass]=useState("")
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const handleSubmit = (event) => {

    //Prevent page reload
    var isLoggedIn = false;
    setErrorPass("");
    setErrorUname("");
    event.preventDefault();
     if(name===database[0].username)
     {
        if(pass===database[0].password)
        {
          isLoggedIn = true;
          setIsSubmitted(true);
        }
        else
        {
             setErrorPass("invalid password")
        }
     }
     else if(name===database[1].username)
     {
        if(pass===database[1].password)
        {
          isLoggedIn = true;
          setIsSubmitted(true);
        }
        else
        {
             setErrorPass("invalid password")
        }
     }
     else
     {
            setErrorUname("invalid username")
     }
    
     if (isLoggedIn) {
      navigate("/app")
     }
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" value={name} 
          onChange={(e) => {
            setname(e.target.value);}} required />
            {errorUname}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" value={pass}
          onChange={(e) => {
          setpass(e.target.value);}}
          required />
          {errorPass}
        </div>
        <div className="button-container">
          <input type="submit" />
          <button >sign up</button>
        </div>
      </form>
    </div>
  );
  
    return (
        <div className="app">
          <div className="login-form">
            <div className="title">Sign In</div>
            {renderForm}
          </div>
        </div>
    );

}

export default Login;