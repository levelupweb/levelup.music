import React from "react";
import "./index.css";

const Index = props => {
	return (
		<div>
			<section className="fullpage center first">
				<div className="container text">
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
							<button className="button">Get Started!</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Index;