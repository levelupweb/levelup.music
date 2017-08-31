import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Burger from '../components/burger/Burger.js';
import Footer from '../components/footer/Footer.js';
import { NotificationContainer } from 'react-notifications';
import './RouteDefaultContainer.css';

const RouteDefaultContainer = ({ component }) =>
	<Route
		render={props => {
			return (
				<div className="default-container">
					<NotificationContainer />
					<Burger />
					<div className="site-content">
						{React.createElement(component)}
						<Footer />
					</div>
				</div>
			);
		}}
	/>;

RouteDefaultContainer.propTypes = {
	component: PropTypes.func
}

export default RouteDefaultContainer;
