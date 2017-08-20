import React from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";
import Header from '../components/header/Header.js';
import './RoutePageContainer.css';

const RoutePageContainer = ({ component }) =>
	<Route
		render={props => {
			return (
				<div className="page-container">
					<div className="site-content">
						<div className="container text blocks">
							<div className="block">
								<Header visible={true} isNotFixed={true} isHorizontal={true} />
							</div>
							<div className="block">
								{React.createElement(component)}
							</div>
						</div>
					</div>
				</div>
			);
		}}
	/>;

export default RoutePageContainer;
