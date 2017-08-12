import React from "react";
import scrollreveal from "scrollreveal";
import "./index.css";

class Index extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		initScrollReveal(scrollreveal());
	}
	render() {
		return (
			<div className="Index-page page">
				<section className="fullpage center text first">
					<div className="jumbotron">
						<div className="jumbotron-title">
							<img src="img/logo-promo.png" alt="Levelup Promo" />
							<h3 className="super title">Levelup Promo</h3>
						</div>
						<div className="jumbotron-content">
							<p className="primary">
								Ваш бренд плохо узнают? Помогите вашим клиентам разглядеть в вас узнаваемый бренд! Команда Levelup Promo в кратчайшие сроки даст вам результат. 
								Мы научим ваш бренд общаться с людьми при помощи социальных сетей и увеличим ваши продажи до 2-х раз!
							</p>
						</div>
						<div className="jumbotron-actions">
							<button className="button">Работать вместе</button>
						</div>
					</div>
				</section>
				<section className="center fullpage text second">
					<div className="section-title">
						<h4 className="super">Статистика</h4>
						<div className="description">Немного цифр</div>
					</div>
					<div className="section-content">
						<div className="stages">
							<div className="stage">
								<div className="count">43%</div>
								<div className="title">2014</div>
							</div>
							<div className="stage">
								<div className="count">59%</div>
								<div className="title">2015</div>
							</div>
							<div className="stage">
								<div className="count">78%</div>
								<div className="title">2016</div>
							</div>
							<div className="stage primary">
								<div className="count">80%</div>
								<div className="title">2017</div>
							</div>
						</div>
						<p className="primary">Процент покупателей, которые перед покупкой искали 
						информацию о товаре в социальных сетях. И этот процент растёт с каждым днём!</p>
					</div>
					<div className="section-actions">
						<button className="button">А ещё?</button>
					</div>
				</section>
				<section className="fullpage center third">
					<div className="section-title">
						<h5 className="super">Но почему именно мы?</h5>
						<div className="description">Немного о приемуществах</div>
					</div>
					<div className="section-content">
						<div className="advantages">
							<div className="advantage">
								<div className="advantage-image">
									<img src="img/team.png" alt="Команда" />
								</div>
								<h6 className="advantage-title super">
									Над рекламной кампанией по продвижению будет работать 
									целая команда профессионалов
								</h6>
								<div className="advantage-description">
									<p>
										Чтобы процесс организации рекламной кампании шёл более эффективно, 
										мы привлекаем к процессу целый список специалистов: стратег, 
										контент-менеджер, копирайтер, таргетолог, комьюнити-менеджер, креатор, дизайнер
									</p>
								</div>
							</div>
							<div className="advantage">
								<div className="advantage-image">
									<img src="img/startup.png" alt="Опыт" />
								</div>
								<h6 className="advantage-title super">
									Наша команда имеет большой опыт работы в сфере продвижения
								</h6>
								<div className="advantage-description">
									<p>
										Наша команда успешно спланировала и реализовала уже более 50 рекламных кампаний 
										для реальных брендов. Благодаря нашей работе бизнес многих наших клиентов обрёл 
										дополнительный доход!
									</p>
								</div>
							</div>
							<div className="advantage">
								<div className="advantage-image">
									<img src="img/money.png" alt="Деньги" />
								</div>
								<h6 className="advantage-title super">
									Отдать ваши социальные сети в наши руке выйдет дешевле, чем найти штатного работника!
								</h6>
								<div className="advantage-description">
									<p>
										На данный момент ауторсинг набирает популярность во всех сферах нашей жизни и продвижение
										социальных сетей - не исключение. Одна из главных причин этому - сравнительная дешевизна по сравнению с наймом в штат нового специалиста.
									</p>
								</div>
							</div>
							<div className="advantage">
								<div className="advantage-image">
									<img src="img/camera.png" alt="Камера" />
								</div>
								<h6 className="advantage-title super">
									Мы имеем все ресурсы для того, чтобы создавать мультиформатный контент!
								</h6>
								<div className="advantage-description">
									<p>
										Профессиональная фотография или видео сделают ваш продукт более привлекательным, а значит это поможет вам увеличить продажи.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="section-actions">
						<button className="button">А ещё?</button>
					</div>
				</section>
				<section className="fullpage center">
					<div className="section-title">
						<h5 className="super">Как это работает?</h5>
						<div className="description">Механизм изнутри</div>
					</div>
					<div className="section-content">
						<div className="advantages">
							<div className="advantage">
								<div className="advantage-image">
									<img src="img/team.png" alt="Команда" />
								</div>
								<h6 className="advantage-title super">
									Над рекламной кампанией по продвижению будет работать 
									целая команда профессионалов
								</h6>
								<div className="advantage-description">
									<p>
										Чтобы процесс организации рекламной кампании шёл более эффективно, 
										мы привлекаем к процессу целый список специалистов: стратег, 
										контент-менеджер, копирайтер, таргетолог, комьюнити-менеджер, креатор, дизайнер
									</p>
								</div>
							</div>
							<div className="advantage">
								<div className="advantage-image">
									<img src="img/startup.png" alt="Опыт" />
								</div>
								<h6 className="advantage-title super">
									Наша команда имеет большой опыт работы в сфере продвижения
								</h6>
								<div className="advantage-description">
									<p>
										Наша команда успешно спланировала и реализовала уже более 50 рекламных кампаний 
										для реальных брендов. Благодаря нашей работе бизнес многих наших клиентов обрёл 
										дополнительный доход!
									</p>
								</div>
							</div>
							<div className="advantage">
								<div className="advantage-image">
									<img src="img/money.png" alt="Деньги" />
								</div>
								<h6 className="advantage-title super">
									Отдать ваши социальные сети в наши руке выйдет дешевле, чем найти штатного работника!
								</h6>
								<div className="advantage-description">
									<p>
										На данный момент ауторсинг набирает популярность во всех сферах нашей жизни и продвижение
										социальных сетей - не исключение. Одна из главных причин этому - сравнительная дешевизна по сравнению с наймом в штат нового специалиста.
									</p>
								</div>
							</div>
							<div className="advantage">
								<div className="advantage-image">
									<img src="img/camera.png" alt="Камера" />
								</div>
								<h6 className="advantage-title super">
									Мы имеем все ресурсы для того, чтобы создавать мультиформатный контент!
								</h6>
								<div className="advantage-description">
									<p>
										Профессиональная фотография или видео сделают ваш продукт более привлекательным, а значит это поможет вам увеличить продажи.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="section-actions">
						<button className="button">А ещё?</button>
					</div>
				</section>
			</div>
		);
	}
}

const initScrollReveal = (sr) => {
	sr.reveal(".jumbotron-title", {
		duration: 500,
		delay: 200,
		origin: "top"
	});
	sr.reveal(".jumbotron-content", {
		duration: 500,
		delay: 600,
		origin: "top"
	});
	sr.reveal(".jumbotron-actions", {
		duration: 500,
		delay: 1000,
		origin: "top"
	});
	sr.reveal(".section-title", {
		duration: 500,
		delay: 300,
		origin: "top"
	});
	sr.reveal(".stages .stage", {
		duration: 500,
		delay: 700,
		origin: "bottom"
	}, 300);
	sr.reveal(".second p.primary", {
		duration: 500,
		delay: 1300,
		origin: "bottom"
	});
	sr.reveal(".second .section-actions", {
		duration: 500,
		delay: 2000,
		origin: "bottom"
	});
}

export default Index;
