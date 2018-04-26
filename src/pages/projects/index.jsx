import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import "./styles.css";
import Project from './item.jsx'
import { projects } from '../../db.js'

const sortProjectsByDate = projects => 
	projects.sort((a, b) => 
		(b.year - a.year)
	)

const renderProjects = projects =>
	projects.map((item, i) => <Project {...item} key={i} />)


export default () => (
	<div className="page-projects page">
		<Helmet>
			<title>
				Наши проекты - Levelup Music
			</title>
			<meta 
				name="description" 
				content="Levelup Music - проекты" 
			/>
			<meta 
				name="keywords" 
				content="levelup music, проекты levelup music, музыкальный лейбл" 
			/>
		</Helmet>
		<div className="block">
			<div className="block-title left" id="about-us">
				<h5 className="super title">
					Наши проекты
				</h5>
				<p className="description">
					Завершённый или готовящиеся проекты
				</p>
			</div>
		</div>
		<div className="block">
			<p className="primary">
				В этом разделе вы сможете найти альбомы, микстейпы, видеоклипы и синглы от участников нашего объединения.	
			</p>
		</div>
		<div className="block">
			<div className="projects">
				{renderProjects(sortProjectsByDate(projects))}
			</div>
		</div>
	</div>
);
