import React from 'react';
import './header.css';
import { ReactComponent as Search } from '@material-design-icons/svg/filled/search.svg';
const Header = () => {










	
	return <div className="headercontaner">
		<div className="leftHeader">
			<span className="logo">Moroco</span>
		</div>
		<div className="centerHeader">
			<div className="seachArea">
				<Search className="searchIcon" />
				<input placeholder="Search for a new frinds" className="searchInput" ></input>
			</div>

		</div>
		<div className="rightHeader">
			<img src="/assets/avatar2.jpg" alt=""/>
		</div>
	</div>;
};

export default Header;
