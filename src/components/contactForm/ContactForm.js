import React from 'react';
import Field from '../field/Field.js';
import Mail from '../../services/mail.js'
import config from '../../../config.js'
import generateMailHTML from '../../templates/mail.js'
import validateForm from './validation.js';
import "./contactForm.css"
import 'react-notifications/lib/notifications.css';

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.mail = new Mail('Новая заявка на сайте ' + config.sitename);
		this.updateForm = this.updateForm.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.renderFields = this.renderFields.bind(this);
		this.state = {
			message: {},
			errors: []
		}
	}
	componentDidMount() {
		const { fields } = this.props;
		this.form.addEventListener('submit', (e) => {
			e.preventDefault();
			return false
		})
		let defaultMessage = {}
		fields.map((field) => {
			defaultMessage = {
				...defaultMessage,
				[field.name]: { fieldName: field.fieldName, value: '' }
			}
		})
		this.setState({
			message: defaultMessage
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
	updateForm(key, fieldName, value) {
		this.setState({
			...this.state,
			message: {
				...this.state.message,
				[key]: { fieldName, value }
			}
		})
	}
	submitForm(e, message, rules) {
		e.preventDefault();
		validateForm(message, rules, err => {
			if(err.length) return this.setState({
				errors: err
			})
			const html = generateMailHTML(message);
			this.mail.dispatchSend(html)	
			.then((did => {
				if(did) this.form.reset()
			}))
		})
	}
	renderErrors(errors) {
		return <ul>
			{errors.map((item, i) => <li key={i}>{item}</li>)}
		</ul>
	}
	render() {
		const { message, errors } = this.state;
		const { fields, isFluid, rules } = this.props;
		return (
			<form className={isFluid && 'fluid'} ref={(e) => {this.form = e}}>
				{this.renderErrors(errors)}
				{this.renderFields(fields)}
				<button className="button ghost" onClick={(e) => {this.submitForm(e, message, rules)}}>Отправить</button>
			</form>
		)
	}
}

export default ContactForm