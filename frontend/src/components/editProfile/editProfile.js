import React,{useState,useContext, useEffect} from "react";
import './editProfile.css';
import { AuthContext } from "../../contexts/context.js";
import axios from "axios";
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
        <div className="edit_info">
        <input type="text" className="new_name"  onChange={(e)=>setLastName(e.target.value)} placeholder={lastName}/><br/><br/>
        <input type="text" className="new_pass" onChange={(e)=>setAge(e.target.value)} placeholder={age}/><br/><br/>
        <input type="text" className="new_pass" onChange={(e)=>setEmail(e.target.value)} placeholder={email}/><br/><br/>
        {/* <input type="password" className="new_pass" onChange={(e)=>setPassword(e.target.value)} placeholder="***"/><br/><br/> */}
        <input type="text" className="new_pass" onChange={(e)=>setGender(e.target.value)} placeholder={gender}/><br/><br/>
        <button onClick={()=>{onSave()}} className="change_info">Change</button>
        {/* <button onclick={onSave} className="cancel_change_info">cancel</button> */}
        </div>

    )
}

export default EditProfile;