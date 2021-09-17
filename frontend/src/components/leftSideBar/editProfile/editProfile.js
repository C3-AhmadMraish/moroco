import React,{useState,useContext, useEffect} from "react";
import './editProfile.css';
import { AuthContext } from "../../../contexts/context";
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
        <span>LastName</span>
        <input type="text" placeholder={lastName} className="new_name"  onChange={(e)=>setLastName(e.target.value)}  /><br/><br/>
        <span>Age</span>
        <input type="text" placeholder={age} className="new_pass" onChange={(e)=>setAge(e.target.value)} /><br/><br/>
        <span>Email</span>
        <input type="text" placeholder={email} className="new_pass" onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
        
        {/* <input type="password" className="new_pass" onChange={(e)=>setPassword(e.target.value)} placeholder="***"/><br/><br/> */}
        <span>Gender</span>
        <input type="text" placeholder={gender}className="new_pass" onChange={(e)=>setGender(e.target.value)} /><br/><br/>
        
        <button onClick={()=>{onSave()}} className="change_info">Change</button>
        {/* <button onclick={onSave} className="cancel_change_info">cancel</button> */}
        </div>

    )
}

export default EditProfile;

{/* <p>{choose(t.post.body)} <span>{t.post.likesCounter}</span></p> */}