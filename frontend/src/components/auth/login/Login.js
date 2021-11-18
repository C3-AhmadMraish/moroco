import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { AuthContext } from "../../../contexts/context";
import GoogleLogin from 'react-google-login'

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
  const  responsesuccessGoogle=(response)=>{
    // console.log(response.profileObj);
    axios.post("http://localhost:5000/users/googleLogin",{tokenId: response.tokenId})
    .then((res) => {
      console.log(res);
      if (res.data) {
        setMessage("");
        saveToken(res.data.token);
        setIsLoggedIn(true);
        history.push("/Home");
      } else throw Error;
  }).catch((err) =>{
      if(err.message){
        setMessage("Error happened while Login, please try again");
        console.log(message);
      }
  })
    
  }
  const  responseErrorGoogle=(response)=>{
    setMessage("responseErrorGoogle => Error happened while Login, please try again");
    console.log(message);
    
    
  }
  useEffect(() => {
    if (isLoggedIn) {
    }
  });
  return (
    <>

      {!isLoggedIn ? (
        <>
          {/* <div className="logIncontener">
            
            <div className="logInleft">
              <div className="leftcc">
              <div className="textDevide">
              </div>
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
                  <GoogleLogin
        clientId="748391034640-4faj5hc4s827b2h6k3c9cni55uq46djh.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={(response)=>responsesuccessGoogle(response)}
        onFailure={(response)=>responseErrorGoogle(response)}
        cookiePolicy={'single_host_origin'}
        
        />
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
          </div> */}
                  <div class="container-register1">
        <div class="form-register">
            <img src="https://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-User-icon.png"/>
            <h1>Login Form</h1>
        <form onSubmit={login}>
         <div class="container-register">
          <input type="text" 
onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" name="email" required />
          <input type="password" 
onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" name="psw" required />
          <div>
          <GoogleLogin
        clientId="748391034640-4faj5hc4s827b2h6k3c9cni55uq46djh.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={(response)=>responsesuccessGoogle(response)}
        onFailure={(response)=>responseErrorGoogle(response)}
        cookiePolicy={'single_host_origin'}
        
        />
              <button type="submit" class="signupbtn">Login</button>
            </div>
            <p >You Need an  account?  <span >
              <Link to="/register">Register</Link></span></p>

    </div>
      </form>
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