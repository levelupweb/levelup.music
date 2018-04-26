import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class Burger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			revealed: false
		};
	}

	revealNavigation() {
		document.querySelector('.site-content').classList.toggle('with-menu');

		this.setState({
			revealed: !this.state.revealed
		});
	}

	render() {
		const { revealed } = this.state;
		return (
			<div className="burger">
				<div className="burger-revealer"
					onClick={() => { this.revealNavigation() }}>
					<div id="hamburger" className={!revealed ? "hamburglar is-closed" : "is-open hamburglar"}>
    				<div className="burger-icon">
    				  <div className="burger-container">
    				    <span className="burger-bun-top"></span>
    				    <span className="burger-filling"></span>
    				    <span className="burger-bun-bot"></span>
    				  </div>
    				</div>
 						<svg width="0" height="0">
    				   <mask id="mask">
    							<path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" strokeMiterlimit="10" strokeWidth="4" d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4" />
    				   </mask>
    				 </svg>
  				</div>
				</div>
				<nav className={revealed ? "navigation revealed" : "navigation"}>
					<ul>
						<Link
							to="/about"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>О нас</li>
						</Link>
						<Link
							to="/projects"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Проекты</li>
						</Link>
						<Link
							to="/contact"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Сотрудничество</li>
						</Link>
						<Link
							to="/people"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Участники</li>
						</Link>
						<Link
							to="/studio"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Студия</li>
						</Link>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Burger;