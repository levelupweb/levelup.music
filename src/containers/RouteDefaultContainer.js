import React from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";
import './RouteDefaultContainer.css';

const RouteDefaultContainer = ({ component }) =>
	<Route
		render={props => {
			return (
				<div className="DefaultContainer container">
					Im In container
					{React.createElement(component)}
				</div>
			);
		}}
	/>;

RouteDefaultContainer.propTypes = {
	component: propTypes.func.isRequired
}

export default RouteDefaultContainer;
