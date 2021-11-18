import React,{useState,useContext, useEffect} from "react";
import './editProfile.css';
import { AuthContext } from "../../../contexts/context";
import axios from "axios";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";

// import 'bootstrap/dist/css/bootstrap.min.css';




const EditProfile=()=>{
  let { userId,token } = useContext(AuthContext);
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');

    useEffect(()=>{
        axios.get(`http://localhost:5000/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            }})
        .then(result=>{
            setLastName(result.data.posts.lastName)
            setAge(result.data.posts.age)
            setEmail(result.data.posts.email)
            setPassword(result.data.posts.password)
            setGender(result.data.posts.gender)
            console.log(result.data)})
        .catch(err=>console.log(err))
    },[])

    const handler2 = (e) => {
      setGender(e.target.value);
    };

    const onSave=async ()=>{
        console.log("here");
       
        try {
          await axios.put(`http://localhost:5000/users/${userId}`,{
            lastName:lastName,
            age:age,
            email: email,
            password:password,
            gender:gender
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            }}
          ).then(resu=>{console.log(resu.data.user)})
        } catch (error) {
          console.log(error);
        }
      }
    return (
<div className="cont">
        <div className="formEdit">
            <img src="https://th.bing.com/th/id/OIP.eIqbtcobXSQQKk07fCCGpQAAAA?pid=ImgDet&w=256&h=256&rs=1"/>
            <h3>Edit Profile</h3>
        <form onSubmit={onSave}>
         <div className="container-form">
          <input type="text"             placeholder={lastName}
            onChange={(e)=>setLastName(e.target.value)}/>
          <input type="text"           placeholder={age}
          onChange={(e)=>setAge(e.target.value)}/>
          <input type="text"           placeholder={email}
          onChange={(e)=>setEmail(e.target.value)}/>
          <select onChange={handler2}> 
          
          <option value='Choose Gender'>Choose Gender</option>
          <option hidden value='0'>{gender}</option>
         <option value='Male'>Male</option>
         <option value='Female'>Female</option>
          </select>
          <input type="file"/>
          <div>
              <button type="submit" className="signupbtn">save change</button>
            </div>
    </div>
      </form>
        </div>
      </div>
    );
  };

export default EditProfile;

