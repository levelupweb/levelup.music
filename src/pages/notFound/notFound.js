import React from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import "./notFound.css"

const notFound = props => 
	<section className="fullpage center first notFound">
		<Helmet>
      <title>404 Not Found</title>
      <meta name="description" content="404 Page of Levelup Boilerplate" />
  		<meta name="keywords" content="react, express, es6, javascript, webpack" />
  		<meta name="author" content="Levelup Web" />
			<meta name="robots" content="index, follow" />
			<meta name="revisit-after" content="1 days" />
			<meta property="og:type" content="website" />
  		<meta property="og:site_name" content="Levelup Boilerplate 404 Page" />
  		<meta property="og:title" content="Levelup Boilerplate" />
  		<meta property="og:description" content="This is an exprensive boilerplate for creating rich sites" />
  	</Helmet>
		<Link to="/">
			<img src="img/logo-default.png" width="64px" alt="404 ошибка" />
		</Link>
		<p className="primary">Ошибка 404</p>
	</section>

export default notFound;