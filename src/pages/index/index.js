import React from "react";
import { Link } from 'react-router-dom'
import "./index.css";

const Index = props => {
	return (
		<div>
			<section className="fullpage center first">
				<div className="container text">
					<div className="blocks">
					<div className="block">
					<div className="jumbotron">
						<div className="jumbotron-title">
							<h3 className="super title">
								Hello World
							</h3>
						</div>
						<div className="jumbotron-content">
							<p className="primary">
								It is a Jumbotron. Start create your awesome application with editing this boilerplate
							</p>
						</div>
						<div className="jumbotron-actions">
							<Link to="/about"><button className="button">Get Started!</button></Link>
						</div>
					</div>
					</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Index;