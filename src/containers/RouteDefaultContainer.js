import React from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";
import Header from '../components/header/Header.js';
import './RouteDefaultContainer.css';

const RouteDefaultContainer = ({ component }) =>
	<Route
		render={props => {
			return (
<<<<<<< HEAD
				<div className="DefaultContainer">
					{React.createElement(component)}
=======
				<div className="DefaultContainer container">
					<Header />
					<div className="container-content">
						{React.createElement(component)}
					</div>
>>>>>>> b8554f3a8368109e8209cd108b6e793412214281
				</div>
			);
		}}
	/>;

RouteDefaultContainer.propTypes = {
	component: propTypes.func.isRequired
}

export default RouteDefaultContainer;
