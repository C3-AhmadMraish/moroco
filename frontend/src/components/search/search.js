import { React, useContext, useEffect, useState } from "react";
import { searchContext } from "../../App";
import "./search.css"
import axios from "axios";
import { AuthContext } from "../../contexts/context";
const Search = () => {
  const { token,userId } = useContext(AuthContext);
  const [ssValue, setssValue] = useState();
  const { sValue } = useContext(searchContext);
  // const [fname,setFname]= useContext();
  const [follow,setFollow] = useState();

  useEffect(() => {
    // console.log("eeeeee   "+e._id)
     function test() {
      setssValue(sValue);
    }
    test();
  }, [sValue]);

  console.log("token",token)
 const addFollower = async (id) => {
   
  try {
    
   await axios.put(`http://localhost:5000/users/test/${id}/follow `, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    }})
      console.log("done")
  } catch (error) {
    console.log(error);
  }
  
}



/*
 const addFollower = async()=> {  // no es6 @ farhan
  console.log("hi")
  try {
    const res = await axios.put(`http://localhost:5000/users/${f._id}/follow`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res,"addFollower")
  } catch (error) {
    console.log(error);
  }
 }

*/


  return (

    <div className="searchContainer">
      {sValue &&
        sValue.map((e, i) => {
          return (

            <div className="searchedUser" key={i}>
              <p>
                {e.firstName} {e.lastName}
              </p>
              
              <img  onClick={()=> {addFollower(e._id)}} height="250px" width="250px" src={e.avatar} alt=""/>

              {/* <button onClick={()=> {addFollower()}}> Follow </button> */}
              {/*How to pass e._id to the above function ? */}
            </div>
            

          );
        })}

    </div>
    
  );
};

export default Search;
