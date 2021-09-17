import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./signUp.css";
const SignUp = () => {
  const history = useHistory();
  const [firstName, setfirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const signUpSend = (e) => {
    e.preventDefault();
    let savedData = { firstName, password, email };
    axios
      .post("http://localhost:5000/users/", savedData)
      .then((res) => {
        history.push("/Login");
      })
      .catch((err) => {
        if (err.message) {
          setError("Error happened while registering, please try again");
        }
      });
  };
  return (
    <div className="logIncontener">
      <div className="logInleft">
        <div className="leftcc">
          <p>
            <span className="logo">Moroco</span> <br />
            <span>Join our Family Today!</span>
          </p>
          <img
            width="100%"
            style={{ marginLeft: "4%" }}
            height="90%"
            src="assets\Project_141-02.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="logInright">
        <div className="loginTest">
          <div className="login-form">
            <form onSubmit={"login"}>
              <h1>Register</h1>
              <div className="form-group">
                <input
                  placeholder="FirstName"
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                />
                <span className="input-icon">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email" //email
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <span className="input-icon">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password" //password
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span className="input-icon">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  signUpSend(e);
                }}
                className="Regbutton"
              >
                Register
              </button>
              <div className="seperator">
                <b>or</b>
              </div>
              <div className="social-icon">
                <button
                  onClick={() => history.push("/Login")}
                  className="login-btn"
                >
                  Login
                </button>
              </div>
              <div>{error}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
