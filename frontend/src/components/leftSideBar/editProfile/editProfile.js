import React,{useState,useContext, useEffect} from "react";
import './editProfile.css';
import { AuthContext } from "../../../contexts/context";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";




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
      <div className="Main-Edit-Profile">
        <div className="container">
          <h4>Account Settings </h4>
          <hr></hr>
          {/* <img src={img} alt= "no-img"/>  */}
          <div>
            {/* <p className="success-update"> {successUpdate}</p> */}
            <Form onSubmit={onSave}>
              <Row className="mb-3">
              
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                  />
                </Form.Group>
              </Row>
  
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  placeholder={age}
                  type="text"
                  onChange={(e)=>setAge(e.target.value)}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder={email}
                  type="text"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  placeholder={gender}
                  type="text"
                  onChange={(e)=>setGender(e.target.value)}
                />
              </Form.Group>
  
  
  
              <Form.Group className="mb-3" controlId="formGridAddress3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  placeholder="image"
                  type="file"
                  // onChange={handleUpload}
                  // onChange={(e) => setImg(e.target.value)}
                />
              </Form.Group>
              
  
            
  
              <button className="change_info" type="submit">
                Save Change
              </button>
            </Form>
          </div>
        </div>
      </div>
    );
  };

export default EditProfile;

