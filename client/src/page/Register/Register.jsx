import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userNameError, setUsernameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [day, setDay] = useState("Day");
  const [month, setMonth] = useState("Month");
  const [year, setYear] = useState("Year");
  const [role, setRole] = useState("");

  //const navigate = useNavigate()

  const onButtonClick = () => {
    setEmailError("");
    setPasswordError("");
    setUsernameError("");
    if (email == "") {
      setUsernameError("Please enter your name");
      return;
    }

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
    console.log(day + " " + month + " " + year);
    // You'll update this function later...
  };

  return (
    <div className={"mainContainer"}>
      <div className={"componentRegister"}>
        <div className={"mainContainer"}>
          <div className={"titleContainer"}>
            <div>Create Your Airbnb Account</div>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              value={username}
              placeholder="Hoàng Trọng Minh"
              onChange={(ev) => setUserName(ev.target.value)}
              className={"inputBox"}
            />
            <label className="errorLabel">{userNameError}</label>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              value={email}
              placeholder="your@gmail.com"
              onChange={(ev) => setEmail(ev.target.value)}
              className={"inputBox"}
            />
            <label className="errorLabel">{emailError}</label>
          </div>
          <br />
          <div className="inputContainer">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={(ev) => setPassword(ev.target.value)}
              className="inputBox"
            ></input>
            <button
              type="button"
              onClick={() => {
                showPassword ? setShowPassword(false) : setShowPassword(true);
              }}
              className="showHideButton"
            >
              {showPassword ? "Hide password" : "Show password"}
            </button>
            <label className="errorLabel">{passwordError}</label>
          </div>
          <br />
          <div className="inputContainer">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(ev) => setConfirmPassword(ev.target.value)}
              className="inputBox"
            ></input>
            <button
              type="button"
              onClick={() => {
                showConfirmPassword
                  ? setShowConfirmPassword(false)
                  : setShowConfirmPassword(true);
              }}
              className="showHideButton"
            >
              {showConfirmPassword ? "Hide password" : "Show password"}
            </button>
            <label className="errorLabel">{passwordError}</label>
          </div>
          <br />
          <div className="birthdayContainer">
            <div className="titleBirthdayu">
              <div>Ngày sinh ?</div>
            </div>
            <span>
              <span>
                <label className="detailBirthday">
                  <select
                    name="selectedDay"
                    value={day}
                    onChange={(e) => {
                      setDay(e.target.value);
                    }}
                  >
                    <option value="Day">Day</option>
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="detailBirthday">
                  <select
                    name="selectedMonth"
                    value={month}
                    onChange={(e) => {
                      setMonth(e.target.value);
                    }}
                  >
                    <option value="Month">Month</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(
                      (month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      )
                    )}
                  </select>
                </label>
                <label className="detailBirthday">
                  <select
                    name="selectedYear"
                    value={year}
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  >
                    <option value="Year">Year</option>
                    {Array.from({ length: 100 }, (_, i) => 1924 + i).map(
                      (year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      )
                    )}
                  </select>
                </label>
              </span>
            </span>
          </div>
          <div className="roleContainer">
            <div>Role ?</div>
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
        </div>
      </div>
    </div>
  );
};

export default Register;
