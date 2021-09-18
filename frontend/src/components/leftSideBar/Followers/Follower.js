import React from 'react'
import "./Followers.css"

function Follower({f}) {

    return (
 
        

        <div className="searchedUser">

            <p>{f.firstName}</p>
            <img height="250px" width="250px" alt="" src={f.avatar}/>

        </div>
        
        
    )
}
export default Follower
{/* <div className="searchContainer">
      {sValue &&
        sValue.map((e, i) => {
          return (

            <div className="searchedUser" key={i}>
              <p>
                {e.firstName} {e.lastName}
              </p>
              <img height="250px" width="250px" src={e.avatar} alt=""/>
            </div>
            

          );
        })}

    </div> */}