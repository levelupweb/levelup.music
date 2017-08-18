import React from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";
import Header from '../components/header/Header.js';
import './RouteDefaultContainer.css';

const RouteDefaultContainer = ({ component }) =>
	<Route
		render={props => {
			return (
				<div className="DefaultContainer">
					{React.createElement(component)}
				</div>
			);
		}}
	/>;

export default RouteDefaultContainer;
