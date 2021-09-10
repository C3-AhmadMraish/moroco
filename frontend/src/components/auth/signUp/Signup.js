import axios from "axios";
import React, { useState} from "react";
import {useHistory } from "react-router-dom";

const SignUp = () => {
    const history = useHistory();
  const [firstName, setfirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error,setError] = useState("");
  
  const signUpSend = (e) => {
    e.preventDefault();
    let savedData = { firstName, password, email };
    axios.post("http://localhost:5000/users/", savedData).then((res) => {
          
        history.push("/Login")
    }).catch((err) =>{
        if(err.message){
            setError("Error happened while register, please try again")
        }
        
    })
  };

  return (
    <div className="Register" style={{ display: "grid", gap: "20px", marginTop:"10px" }}>

      <input
        type="text"
        placeholder="FirstName" //firstName
        onChange={(e) => {
          setfirstName(e.target.value);
        }}
      />

      <input
        type="password"
        placeholder="Password" //password
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email" //email
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <button
        type="submit"
        onClick={(e) => {
          {
            signUpSend(e);
          }
        }}
      >
        Register
      </button>
      <div>{error}</div>
    </div>
  );
};
  export default SignUp;