import React, {  useState ,useContext} from 'react';
import './feed.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import axios from 'axios';
import { AuthContext } from '../../contexts/context';
import { postContext } from '../../App';
const Feed = () => {
    const [postBody,setPostBody]=useState([]);
    const { validateToken, token, isLoggedIn } = useContext(AuthContext);

    const [nameUserFeed, setNameUserFeed] = useState("");

    const {value,setValue}=useContext(postContext);
        const Addpost=()=>{
            axios.post("http://localhost:5000/posts",{body:postBody},{
            headers: {
              Authorization: `Bearer ${token}`,
            }}).then(result=>setValue([...value,result]))
           
        }
  

	return(
		<div className="Feed">
		<div className="post_area">
                <div className="user_Info_PA">
					<img src="/assets/avatar3.png" alt=""/>
                    <div>
                        <p id="post_user">naif</p>
                    </div>
                </div>
                <div className="post_input">
                    <textarea onChange={e=>setPostBody(e.target.value)} placeholder="what's on your mind Naif" id="posts" rows="3"></textarea>
                    <button onClick={Addpost} id="create_post"><AddCircleOutlineIcon/></button>
                </div>
            </div>
		</div>
	) 
};

export default Feed;
