import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //const navigate = useNavigate()

  const onButtonClick = () => {
    setEmailError("");
    setPasswordError("");
    if (email == "") {
      setEmailError("Please enter your email");
      return;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    if (password == "") {
      setPasswordError("Please enter a password");
      return;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }
    setEmail("");
    setPassword("");
    // You'll update this function later...
  };

  return (
    <div className={"mainContainer"}>
      <div className={"componentLogin"}>
        <div className={"mainContainer"}>
          <div className={"titleContainer"}>
            <div>Welcome to Airbnb!</div>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              value={email}
              placeholder="Enter your email here"
              onChange={(ev) => setEmail(ev.target.value)}
              className={"inputBox"}
            />
            <label className="errorLabel">{emailError}</label>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              value={password}
              placeholder="Enter your password here"
              onChange={(ev) => setPassword(ev.target.value)}
              className={"inputBox"}
            />
            <label className="errorLabel">{passwordError}</label>
          </div>
          <br />
          <div className="saveInfor">
            <label>
              <input type="checkbox" checked className="sameadr" />
              Save login info
            </label>
          </div>
          <div className={"inputContainer"}>
            <button
              className={"inputButton"}
              type="button"
              onClick={onButtonClick}
            >
              Log in
            </button>
          </div>
          <div className="forgotPassword">Forgot password ? </div>
          <div className="registerAccount">
            <Link to={"/register"}>Sign up for an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
