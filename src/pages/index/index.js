import React from "react";
import "./index.css";

const Index = props => {
	return (
		<div>
			<section className="fullpage center text first">
				<div className="container">
					<div className="jumbotron">
						<div className="jumbotron-title">
							<h3 className="super title">[PROJECT_NAME]</h3>
						</div>
						<div className="jumbotron-content">
							<p className="primary">
								Начните создавать с редактирования данной страницы!
							</p>
						</div>
						<div className="jumbotron-actions">
							<button className="button" data-scrollTo=".intro">А тут кнопочка</button>
						</div>
					</div>
				</div>
			</section>
			<section className="fullpage center text second">
				<div className="container">
					<h2>Не забудьте запустить npm run start</h2>
					<p className="primary">В своей консоли..</p>
				</div>
			</section>
		</div>
	)
}

export default Index;