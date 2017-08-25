import React from 'react';
import { Link } from 'react-router-dom'
import "./notFound.css"

const notFound = props => 
	<section className="fullpage center first notFound">
		<Link to="/">
			<img src="img/logo-default.png" width="64px" alt="404 ошибка" />
		</Link>
		<p className="primary">Ошибка 404</p>
	</section>

export default notFound;