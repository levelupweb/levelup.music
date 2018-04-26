import React from 'react'
import config from '../../utils/config.js'
import './styles.css'

const Project = ({ id, title, image, year, link, category }) =>
	<div className="project">
		<div className="row">
			<div className="col-md-2 col-xs-2">
				<div className="project-image">
					<img src={config.static + image} alt={title} />
				</div>
			</div>
			<div className="col-md-10 col-xs-10">
				<div className="project-content">
					<div className="name">
						<a href={link} target="_blank"><h2>{title}</h2></a>
						<span className="date">{year.toString()}</span>
					</div>
					<p className="primary">
						{category}
					</p>
				</div>
			</div>
		</div>
	</div>

export default Project