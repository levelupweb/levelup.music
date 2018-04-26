import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import config from '../../utils/config'
import "./styles.css";

export default () => (
	<div className="page-studio page">
		<Helmet>
			<title>
				Студия - Levelup Music
			</title>
			<meta 
				name="description" 
				content="Levelup Music - Студия" 
			/>
			<meta 
				name="keywords" 
				content="levelup music, звукозапись, студия levelup music, музыкальный лейбл" 
			/>
		</Helmet>
		<div className="block">
			<div className="block-title left" id="about-us">
				<h5 className="super title">
					Студия Levelup Music
				</h5>
				<p className="description">Хотите найти качественный звук?</p>
			</div>
		</div>
		<div className="block">
			<p className="primary">
				Музыкальный лейбл Levelup Music располагает профессиональной музыкальной{" "}
				студией, где любая идея будет воплощена в самом лучшем виде! Мы ждём вас{" "}
				в гости по самой демократичной цене и с бесплатными печеньками.
			</p>
		</div>
		<div className="block">
			<div className="list">
				<div className="item">
					<div className="icon">
						<img src={config.static + "/img/desk.png"} alt="Запись на студии"/>
					</div>
					<div className="content space-between">
						<span>Запись на студии</span>
						<span>400 руб/час</span>
					</div>
				</div>
				<div className="item">
					<div className="icon">
						<img src={config.static + "/img/vocal.png"} alt="Коррекция вокала"/>
					</div>
					<div className="content space-between">
						<span>Коррекция вокала</span>
						<span>500 руб/час</span>
					</div>
				</div>
				<div className="item">
					<div className="icon">
						<img src={config.static + "/img/workplace.png"} alt="Сведение под ключ"/>
					</div>
					<div className="content space-between">
						<span>Сведение под ключ</span>
						<span>1000 руб/час</span>
					</div>
				</div>
			</div>
		</div>
		<div className="block">
			<div className="button-group" style={{justifyContent: 'flex-start'}}>
				<Link to="/contact">
					<button className="button">Забронировать студию</button>
				</Link>
			</div>
		</div>
	</div>
);