import React from 'react';
import './main.css'
const Main = () => {
	return(
		
		<div className="main">
		
		<div class="post_area">
                <div class="user_Info_PA">
					<img src="/assest/avatar2.jpg" alt=""/>
                    <div>
                        <p id="post_user">Naif</p>
                    </div>
                </div>
                <div class="post_input">
                    <textarea id="posts" rows="3"></textarea>
                    <button id="create_post">Post</button>
                </div>
            </div>
		</div>

	) 
};

export default Main;
