import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Outlet, Link } from "react-router-dom";
import "./login.css";
import App from "./App";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "./service_components/service";
import { getToken } from "./service_components/get_token";

function Login() {
  // React States
  const navigate = useNavigate();

  const [errorUname, setErrorUname] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [name, setname]=useState("")
  const [pass, setpass]=useState("")
  // User Login info

  


  const handleSubmit = (event) => {
    event.preventDefault();

    //Prevent page reload
    var isLoggedIn = false;
    setErrorPass("");
    setErrorUname("");
    
    verifyLogin(name, pass).then(user => {
        if (user) {
          document.cookie=user.user_id+":"+user.token;
           
          navigate("/app")
        }
        else {
          setErrorPass("Invalid Credentials")
        }

    })
  };

  const redirect = async (event) => {
    event.preventDefault();
    {navigate("/signup")}
  }

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" value={name} 
          onChange={(e) => {
            setname(e.target.value);}}  required/>
            {errorUname}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" value={pass}
          onChange={(e) => {
          setpass(e.target.value);}}
           required/>
          {errorPass}
        </div>
        <div className="button-container">
          <input type="submit" />
          <button onClick={redirect}>sign up</button>
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