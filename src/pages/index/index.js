import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import "./index.css";

const Index = props => {
	return (
		<div>
			<Helmet>
        <title>Hello World</title>
        <meta name="description" content="Hello World Page of Levelup Boilerplate" />
    		<meta name="keywords" content="react, express, es6, javascript, webpack" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  			<meta property="og:type" content="website" />
    		<meta property="og:site_name" content="Levelup Boilerplate Hello Page" />
    		<meta property="og:title" content="Levelup Boilerplate" />
    		<meta property="og:description" content="This is an exprensive boilerplate for creating rich sites" />
    	</Helmet>
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