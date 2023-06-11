import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Outlet, Link } from "react-router-dom";
import "./login.css";
import App from "./App";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "./signupservice";

function SignUP() {

  const navigate = useNavigate();
  const [userExist, setuserExist] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [name, setname]=useState("")
  const [pass, setpass]=useState("")
  const [repass, setrepass]=useState("")
  


  const handleSubmit = (event) => {
    event.preventDefault();
    //Prevent page reload
   
    if(pass !== repass)
    {
        setErrorPass("please write same password as above")
        return
    }
     setErrorPass("")
    signUpUser(name, pass).then(response => {
        if (response) {
          navigate("/login")
        }
        else
        {
             setuserExist("Username already exists")
        }
    })
  
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" value={name} 
          onChange={(e) => {
            setname(e.target.value);}} required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" value={pass}
          onChange={(e) => {
          setpass(e.target.value);}}
          required />
        </div>
        <div className="input-container">
          <label>R-enter Password </label>
          <input type="password" name="repass" value={repass}
          onChange={(e) => {
          setrepass(e.target.value);}}
          required />
          {errorPass}{userExist}
        </div>
        <div className="button-container">
            <input type="submit"/>
        </div>
      </form>
    </div>
  );
  
    return (
        <div className="app">
          <div className="login-form">
            <div className="title">Sign Up</div>
            {renderForm}
          </div>
        </div>
    );

}

export default SignUP;