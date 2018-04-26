import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import BackgroundVideo from '../../components/backgroundVideo'
import config from "../../utils/config"
import Socials from '../../components/socials'
import "./styles.css";

export default () => {
	return (
		<div>
			<Helmet>
        <title>
					Levelup Music - музыкальный лейбл
				</title>
				<meta 
					name="description" 
					content="Levelup Music - современный музыкальный лейбл" 
				/>
				<meta 
					name="keywords" 
					content="levelup music, музыкальный лейбл" 
				/>
  		</Helmet>
  		<div className="video-background">
  			<BackgroundVideo />
			</div>
			<div className="logo">
				<a href="#" target="_blank">
					<img src={config.static + "/img/logo-music-inverted.png"} alt="Levelup Worlds"/>	
				</a>
			</div>
			<section className="fullpage center first inverted" style={{border:0}}>
				<div className="container text">
					<div className="blocks">
						<div className="block">
							<Socials />
						</div>
						<div className="block">
							<div className="jumbotron">
								<div className="jumbotron-title">
									<h3 className="super title">
										Levelup Music
									</h3>
								</div>
								<div className="jumbotron-content">
									<p className="primary">
										Новый музыкальный лейбл, который создаёт историю. Присоединяйся к нам, будь в тренде! А также студия звукозаписи в Костроме
									</p>
								</div>
								<div className="jumbotron-actions">
									<div className="button-group" style={{justifyContent: 'center'}}>
										<Link to="/contact">
											<button className="button ghost">
												Работать вместе <i className="fa fa-location-arrow"></i>
											</button>
										</Link>
										<Link to="/about">
											<button className="button ghost">
												О нас <i className="fa fa-angle-double-right"></i>
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</section>
		</div>
	)
}
