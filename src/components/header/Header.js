import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = props => 
	<div className="header block">
		<nav className="navigation">
			<ul>
				<Link
					to="/">
					<li>Start Page</li>
				</Link>
				<Link
					to="/about">
					<li>About</li>
				</Link>
				<a
					>
					<li>Story Book <i className="fa fa-external-link"></i></li>
				</a>
				<a href="https://github.com/kv9991/levelup.boilerplate.static">
					<li>Github <i className="fa fa-external-link"></i></li>
				</a>
			</ul>
			<ul className="header-logo">
				<Link to="/">
					<img src="img/logo-default.png" alt="Levelup Web"/>
				</Link>
			</ul>	
		</nav>
	</div>

export default Header;