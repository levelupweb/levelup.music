import { axiosAuth } from './axios.js';
import { NotificationManager } from 'react-notifications';
import config from '../../config.js'

class Mail {
	constructor(subject) {
		this.subject = subject;
	}
	dispatchSend(html) {
		const { who, to, sendURL } = config.mail
		return axiosAuth({
			method: "POST",
			url: sendURL,
			data: {
				subject: this.subject,
				html,
				who,
				to
			}
		}).then((response) => {
			const { success, message } = response.data;
			console.log(response)	
		if(success) {
				return NotificationManager.success(message, 'Успех');
			} else {
				return NotificationManager.error(message, 'Ошибка');
			}
		}).catch((err) => {
			console.log(err)
			return NotificationManager.error('Ошибка клиента', 'Ошибка');
		})
	}
}

export default Mail;
