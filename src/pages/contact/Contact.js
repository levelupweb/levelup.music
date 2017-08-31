import React from "react";
import ContactForm from '../../components/contactForm/ContactForm.js';
import Modal from '../../components/modal/Modal.js';
import { Helmet } from "react-helmet";
import Socials from '../../components/socials/Socials.js'
import { Link } from 'react-router-dom'
import "./contact.css";

const contactFormFields = [ {
		fieldName: 'Имя клиента',
		placeholder: 'Ваше имя',
		name: 'userName',
		type: 'text'
	}, {
		fieldName: 'E-Mail',
		placeholder: 'Ваш E-Mail',
		name: 'userEmail',
		type: 'text'
	}, {
		fieldName: 'Мобильный телефон',
		placeholder: 'Контактный телефон',
		name: 'userPhone',
		type: 'text'
	}, {
		fieldName: 'Сообщение',
		placeholder: 'Ваше сообщение',
		name: 'userMessage',
		type: 'textarea'
} ]

const contactModalConfiguration = {
	title: 'Обратная связь',
	description: 'Сообщение',
	content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи'
}

const contactFormRules = {
	userName: ['required'],
	userEmail: ['required', 'email'],
	userPhone: ['required', 'mobile'],
	userMessage: ['required']
}

const renderContactForm = () => <ContactForm 
	isFluid={true} 
	rules={contactFormRules}
	fields={contactFormFields} />


const Contact = props => {
	return (
		<div className="page-contact page">
			<Helmet>
        <title>Сотрудничество - Levelup Web</title>
        <meta name="description" content="Сотрудничество Levelup Worlds. Digital-студия полного цикла" />
    		<meta name="keywords" content="фото, видео съемка, звукозапись, звук студия, веб-разработка, веб агентство, создать веб-приложение, разработка приложений, купить сайт, создать сайт в студии под ключ, сайт под ключ купить" />
    	</Helmet>
			<div className="block">
				<div className="block-title left" id="contact">
					<h5 className="super title">
						Сотрудничество
					</h5>
					<p className="description">Как с нами связаться</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					У вас есть деловое предложение? Свяжитесь с нами при помощи любого доступного вам способа, используя нашу контактную информацию
				</p>
			</div>
			<div className="block">
				<div className="list">
					<div className="item">
						<div className="icon">
							<img src="dist/img/paper-plane.png" alt="Почта"/>
						</div>
						<div className="content">
							music@levelupworlds.com
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<img src="dist/img/placeholder.png" alt="Адрес"/>
						</div>
						<div className="content">
							г. Москва, Пресненская наб., 6, стр. 2
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<img src="dist/img/smartphone.png" alt="Мобильный телефон"/>
						</div>
						<div className="content">
							(903) 634-69-29
						</div>
					</div>
				</div>
			</div>
			<div className="block">
				<div className="button-group">
					<div>
						<Modal options={contactModalConfiguration} render={renderContactForm()}>
							<button className="button ghost">Написать нам</button>
						</Modal>
					</div>
					<div>
						<Link to="/studio">
							<button className="button ghost">Наша студия</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact;
