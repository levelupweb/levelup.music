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
				NotificationManager.success(message, 'Успех');
				return true
			} else {
				NotificationManager.error(message, 'Ошибка');
				return false;
			}
		}).catch((err) => {
			console.log(err)
			NotificationManager.error('Ошибка клиента', 'Ошибка');
			return false
		})
	}
}

export default Mail;
