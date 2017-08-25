import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = props => 
	<div className="header block">
		<nav className="navigation">
			<ul>
				{/*<Link

					to="/page/about">
					<li>О нас</li>
				</Link> */}
				<Link
					to="/page/partner">
					<li>Партнерам</li>
				</Link>
				<Link
					to="/page/career">
					<li>Карьера</li>
				</Link>
				<Link
					to="/page/team">
					<li>Команда</li>
				</Link>
				<Link
					to="/page/contact">
					<li>Контакты</li>
				</Link>
			</ul>
			<ul className="header-logo">
				<Link to="/">
					<img src="img/logo-default.png" alt="Levelup Web"/>
				</Link>
			</ul>	
		</nav>
	</div>

export default Header;