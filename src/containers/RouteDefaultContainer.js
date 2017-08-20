import React from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";
import Header from '../components/header/Header.js';
import './RouteDefaultContainer.css';

const RouteDefaultContainer = ({ component }) =>
	<Route
		render={props => {
			return (
				<div className="default-container">
					<Header />
					<div className="site-content">
						{React.createElement(component)}
					</div>
				</div>
			);
		}}
	/>;

export default RouteDefaultContainer;
