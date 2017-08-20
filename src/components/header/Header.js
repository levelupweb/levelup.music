import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			revealed: false
		};
	}

	revealNavigation() {
		if (!this.props.visible) {
		  document.querySelector(".site-content").classList.toggle("blured");
		} 
		
		this.setState({
			revealed: !this.state.revealed
		});
	}

	render() {
		const { revealed } = this.state;
		const { visible, isNotFixed, isHorizontal } = this.props;
		return (
			<div className={`header ${(visible && 'visible')} ${(isNotFixed && 'static')} ${(isHorizontal && 'horizontal')}`}>
				<div className="header-revealer spacing"
					onClick={() => { this.revealNavigation() }}>
					{revealed ? "Закрыть меню" : "Открыть меню"}
				</div>
				<nav className={revealed ? "navigation revealed" : "navigation"}>
					<ul>
						<Link
							to="/"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Главная</li>
						</Link>
						<Link
							to="/about"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>О нас</li>
						</Link>
						<Link
							to="/prices"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Услуги и цены</li>
						</Link>
						<Link
							to="/career"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Карьера</li>
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
							<li>Контакты</li>
						</Link>
					</ul>
				</nav>
			</div>
		);
	}
}
