import React from "react";
import { Link } from 'react-router-dom'
import ProjectList from '../../components/projectList/ProjectList.js';
import "./index.css";

const projects = [
	{
		id: 1,
		title: 'Montemilli',
		description: 'Сайт ювелирного магазина Montemilli',
		image: '/img/avantazh.png'
	},
	{
		id: 2,
		title: 'Sustav',
		description: 'Сайт врача-травматолога Александра Ветошкина',
		image: '/img/sustav.png'
	},
	{
		id: 1,
		title: 'Montemilli',
		description: 'Сайт ювелирного магазина Montemilli',
		image: '/img/sustav.png'
	}
]

const Index = props => {
	return (
		<div>
			<section className="fullpage center first">
				<div className="background">
					<img src="/img/intro-1.png" className="ipad" alt="" />
					<img src="/img/intro-2.png" className="iphone" alt="" />
				</div>
				<div className="container text">
					<div className="jumbotron">
						<div className="jumbotron-title">
							<h3 className="super title">
								<img src="/img/logo-web.png" />
								Levelup Web
							</h3>
						</div>
						<div className="jumbotron-content">
							<p className="primary">
								Мы создаём то, что облегачает общение между клиентом и бизнесом. Мы создаём приложения самых разных уровней сложности: от простых продающих страниц до высоконагруженных веб-платформ. 
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="fullpage text second">
				<div className="container">
					<div className="section-title left">
						<h4 className="super">Портфолио</h4>
						<p className="description">Наши работы</p>
					</div>
					<div className="section-content">
						<ProjectList preview={true} projects={projects} />
					</div>
					<div className="section-actions">
						<span className="button"><Link to="/projects">Все проекты</Link></span>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Index;