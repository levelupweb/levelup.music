import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import "./about.css";

const About = props => {
	return (
		<div className="page-about page">
			<Helmet>
        <title>О нас - Levelup Music</title>
        <meta name="description" content="Levelup Music - о нас" />
    		<meta name="keywords" content="levelup music, о команде levelup music, музыкальный лейбл" />
    	</Helmet>
			<div className="block">
				<div className="block-title left" id="about-us">
					<h5 className="super title">
						Что такое Levelup Music
					</h5>
					<p className="description">Кто мы такие?</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					Молодой и дерзкий музыкальный лейбл. Творческое объединение, где создается только качественный продукт. Разносторонние и опытные МС, сочный звук и свежий взгляд на шоу, профессиональный подход к делу.
				</p>
			</div>
			<div className="block">
				<div className="button-group" style={{justifyContent: 'flex-start'}}>
					<Link to="/contact"><button className="button ghost">Работать вместе</button></Link>
					<Link to="/people"><button className="button ghost">Участники лейбла</button></Link>
				</div>
			</div>
		</div>
	)
}

export default About;
