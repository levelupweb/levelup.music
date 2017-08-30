import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import "./people.css";
import Person from './Person.js'
import { peoples } from '../../db.js'

const renderPeople = peoples =>
	peoples.map((item, i) => <Person {...item} key={i} />)

const People = props => {
	return (
		<div className="page-people page">
			<Helmet>
        <title>Участники лейбла - Levelup Music</title>
        <meta name="description" content="Levelup Music - участники лейбла" />
    		<meta name="keywords" content="levelup music, участники levelup music, музыкальный лейбл" />
    	</Helmet>
			<div className="block">
				<div className="block-title left" id="about-us">
					<h5 className="super title">
						Участники лейбла
					</h5>
					<p className="description">Наша команда</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					Наш лейбл пока только начинает свою историю, поэтому мы в постоянном поиске свежих лиц. На данный момент наш лейбл насчитывает совсем небольшое количество исполнителей, поэтому если вы желаете развиваться в данном направлении, мы всегда будем рады помочь!
				</p>
			</div>
			<div className="block">
				{renderPeople(peoples)}
			</div>
			<div className="block">
				<div className="button-group" style={{justifyContent: 'flex-start'}}>
					<Link to="/contact"><button className="button ghost">Сотрдничество</button></Link>
				</div>
			</div>
		</div>
	)
}

export default People;
