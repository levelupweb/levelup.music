import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import "./blog.css";

const Blog = props => {
	return (
		<div className="page-blog page">
			<Helmet>
        <title>Блог - Levelup Music</title>
        <meta name="description" content="Levelup Music - блог" />
    		<meta name="keywords" content="levelup music, новости levelup music, блог levelup music, музыкальный лейбл" />
    	</Helmet>
			<div className="block">
				<div className="block-title left" id="about-us">
					<h5 className="super title">
						Наш блог
					</h5>
					<p className="description">Лента последних новостей</p>
				</div>
			</div>
		</div>
	)
}

export default Blog;
