import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Register from "./../Register/Register";
import { useEffect } from "react";
import { UserContext } from "../../UserContext";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [redirect, setRedirect] = useState("false");
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn chặn hành động gửi biểu mẫu mặc định
    setEmailError("");
    setPasswordError("");

    // Kiểm tra tính hợp lệ của email và mật khẩu
    if (email === "") {
      setEmailError("Please enter your email");
      return;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    if (password === "") {
      setPasswordError("Please enter a password");
      return;
    }
    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    try {
      const response = await axios.post(
        "auth/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      if (response.data.status === 1) {
        const tokenbearn = response.data.accessToken;
        localStorage.setItem("tokenUser", tokenbearn);
        setUser(response.data.user);
        setToken(response.data.accessToken);
        setRedirect(true);
        setEmail("");
        setPassword("");
      } else {
        setEmailError(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("There was an error!", error);
      setPasswordError("An error occurred. Please try again.");
    }
  };
  useEffect(() => {
    if (redirect === true) {
      navigate("/");
    }
  }, [redirect, navigate]);

  return (
    <div className={"mainContainer"}>
      <div className={"componentLogin"}>
        <div className={"mainContainer"}>
          <div className={"titleContainer"}>
            <div>Welcome to Airbnb!</div>
          </div>
          <br />
          <form onSubmit={handleSubmit}>
            <div className={"inputContainer"}>
              <input
                type="email"
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
                type="password"
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
                <input type="checkbox" className="sameadr" />
                Save login info
              </label>
            </div>
            <div className={"inputContainer"}>
              <button
                className={"inputButton"}
                type="submit" // Đặt type là "submit" để gửi biểu mẫu
              >
                Log in
              </button>
            </div>
            <div className="forgotPassword">Forgot password?</div>
            <div className="registerAccount">
              <Link to={"/register"}>Sign up for an account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
