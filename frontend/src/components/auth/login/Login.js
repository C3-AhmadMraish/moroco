import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { AuthContext } from "../../../contexts/context";
const Login = () => {
  const { setIsLoggedIn, isLoggedIn, saveToken } = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      if (res.data.success) {
        setMessage("");
        saveToken(res.data.token);
        setIsLoggedIn(true);
        history.push("/Home");
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      // console.log("farhan",isLoggedIn)
    }
  });
  return (
    <>
      {!isLoggedIn ? (
        <>
          <div className="logIncontener">
            <div className="logInleft">
              <div className="leftcc">
            <p><span className="logo">Moroco</span> <br/> <span>Connect with friends and the world around you.</span> </p>
            <img width="80%" height="90%" src="assets\730_generated.jpg"></img>
              </div>
            </div>
            <div className="logInright">
              <div className="loginTest">
              <div className="login-form">
                <form onSubmit={login}>
                  <h1>Login</h1>
                  <div className="form-group">
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      placeholder="E-mail Address"
                    />
                    <span className="input-icon">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      name="psw"
                      placeholder="Password"
                    />
                    <span className="input-icon">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                  <button className="login-btn">Login</button>
                  <div className="seperator">
                    <b>or</b>
                  </div>
                  <div className="social-icon">
                    <button  onClick={()=> history.push("/register")} type="button">Register</button>
                  </div>
                </form>
              </div>
            </div>
            </div>
          </div>
        </>
      ) : (
        history.push("/")
      )}
    </>
  );
};
export default Login;