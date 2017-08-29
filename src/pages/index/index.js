import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import BackgroundVideo from '../../components/backgroundVideo/BackgroundVideo.js'
import config from "../../../config.js"
import Socials from '../../components/socials/Socials.js'
import "./index.css";

const Index = props => {
	return (
		<div>
			<Helmet>
        <title>Levelup Music</title>
        <meta name="description" content="Levelup Music - современный музыкальный лейбл" />
    		<meta name="keywords" content="levelup music, музыкальный лейбл" />
  		</Helmet>
  		<div className="video-background">
  			<BackgroundVideo />
			</div>
			<div className="logo">
				<a href="#" target="_blank">
					<img src={config.staticURL + "/img/logo-music-inverted.png"} alt="Levelup Worlds"/>	
				</a>
			</div>
			<section className="fullpage center first inverted" style={{border:0}}>
				<div className="container text">
					<div className="blocks">
					<div className="block">
					<div className="jumbotron">
						<div className="jumbotron-title">
							<h3 className="super title">
								Levelup Music
							</h3>
						</div>
						<div className="jumbotron-content">
							<p className="primary">
								Новый музыкальный лейбл, который создаёт историю. Присоединяйся к нам, будь в тренде!
							</p>
						</div>
					</div>
					</div>
					<div className="block" style={{paddingTop:0}}>
						<Socials />
					</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Index;