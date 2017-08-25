import React from 'react';
import Field from '../field/Field.js';
import Mail from '../../services/mail.js'
import config from '../../../config.js'
import generateMailHTML from '../../templates/mail.js'
import { NotificationContainer } from 'react-notifications';
import "./contactForm.css"
import 'react-notifications/lib/notifications.css';

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.mail = new Mail(
			config.mail.secret, 
			'Иван из Levelup Web', 
			'beatzhitta@gmail.com', 
			'Новая заявка на сайте Levelup.Web',
			config.mail.sendURL
		);
		this.state = {
			message: {}
		}
	}
	componentDidMount() {
		this.form.addEventListener('submit', (e) => {
			e.preventDefault();
			return false
		})
	}
	renderFields(fields) {
		return fields.map((item, i) => <Field key={i} 
			fieldName={item.fieldName}
			onInput={this.updateForm}
			placeholder={item.placeholder}
			name={item.name}
			type={item.type}
			hidden={item.hidden || false} />
		)
	}
	updateForm = (key, fieldName, value) => {
		this.setState({
			message: {
				...this.state.message,
				[key]: {
					fieldName,
					value
				}
			}
		})
	}
	submitForm(e, html) {
		e.preventDefault()
		this.mail.dispatchSend(html)	
		.then((did => {
			if(did) this.form.reset()
		}))	
	}
	render() {
		const { message } = this.state;
		const { fields, isFluid } = this.props;
		return (
			<form className={isFluid && 'fluid'} ref={(e) => {this.form = e}}>
				{this.renderFields(fields)}
				<button className="button" onClick={(e) => {this.submitForm(e, generateMailHTML(message))}}>Отправить</button>
				<NotificationContainer />
			</form>
		)
	}
}

export default ContactForm