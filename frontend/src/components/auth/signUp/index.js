import axios from "axios";
import React, { useState} from "react";
import {useHistory } from "react-router-dom";

const Register = () => {
    const history = useHistory();
  const [firstName, setfirstName] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error,setError] = useState("");
  

// http://localhost:5000/users/

  return
};
  export default Register;