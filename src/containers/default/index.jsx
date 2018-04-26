import React from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";
import Burger from '../../components/burger';
import Footer from '../../components/footer'
import { NotificationContainer } from 'react-notifications';
import './styles.css';

const RouteDefaultContainer = ({ component, match }) =>
	<Route
		match={match}
		render={props => {
			return (
				<div className="default-container">
					<NotificationContainer />
					<Burger />
					<div className="site-content">
						{React.createElement(component)}
					</div>
					<Footer />
				</div>
			);
		}}
	/>;

export default RouteDefaultContainer;
