import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./burger.css";

class Burger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			revealed: false
		};
	}

	revealNavigation() {
		if (!this.props.visible) {
		  document.querySelector(".site-content").classList.toggle("with-menu");
		} 
		
		this.setState({
			revealed: !this.state.revealed
		});
	}

	render() {
		const { revealed } = this.state;
		return (
			<div className="burger">
				<p className="burger-revealer spacing"
					onClick={() => { this.revealNavigation() }}>
					{revealed ? "Закрыть меню" : "Открыть меню"}
				</p>
				<nav className={revealed ? "navigation revealed" : "navigation"}>
					<ul>
						<a target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/kv9991/levelup.boilerplate.static"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Github <i className="fa fa-external-link"></i></li>
						</a>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Burger;