import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = props => 
	<div className="header block">
		<nav className="navigation">
			<ul>
				<Link
					to="/about">
					<li>О нас</li>
				</Link>
				<Link
					to="/people">
					<li>Участники</li>
				</Link>
				<Link
					to="/projects">
					<li>Проекты</li>
				</Link>
				<Link
					to="/contact">
					<li>Сотрудничество</li>
				</Link>
				<Link
					to="/studio">
					<li>Студия</li>
				</Link>
			</ul>
			<ul className="header-logo">
				<Link to="/">
					<img src="./dist/img/logo-music-inverted.png" alt="Levelup Music"/>
				</Link>
			</ul>	
		</nav>
	</div>

export default Header;