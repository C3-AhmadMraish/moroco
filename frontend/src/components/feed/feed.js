import React, {  useState ,useContext, useEffect} from 'react';
import './feed.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import axios from 'axios';
import { AuthContext } from '../../contexts/context';
import { postContext } from '../../App';

const Feed = () => {
  
    const [postBody,setPostBody]=useState([]);
    const { validateToken, token, isLoggedIn , userId } = useContext(AuthContext);
    const [nameUserFeed, setNameUserFeed] = useState("");
    const {value,setValue}=useContext(postContext);
  
        const Addpost=()=>{
            axios.post("http://localhost:5000/posts",{body:postBody},{
            headers: {
              Authorization: `Bearer ${token}`,
            }}).then(result=>setValue([...value,result]))
        }
        const nameUsersFeed = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/users/${userId}`,
                {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    }}
                )
                console.log(res.data.posts.firstName);
                setNameUserFeed(res.data.posts.firstName)
            } catch (error) {
                console.log(error);
            }
        };
        useEffect(() => {
            nameUsersFeed();
          }, []);
    return(
        <div className="Feed">
        <div className="post_area">
      
                <div className="user_Info_PA">
                    <img src="/assets/avatar3.png" alt=""/>
                    <div>
                        <p id="post_user">{nameUserFeed}</p>
                    </div>
                </div>
                <div className="post_input">
                    <textarea onChange={e=>setPostBody(e.target.value)} placeholder={ `What is on your mind ${nameUserFeed} ? `}  id="posts" rows="3">{nameUserFeed}</textarea>
                    <button onClick={Addpost} id="create_post"><AddCircleOutlineIcon/></button>
                </div> 
            </div>
        </div>
    ) 
};
export default Feed;