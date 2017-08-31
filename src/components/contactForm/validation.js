const validation = (message, rules, cb) => {
	if(Object.keys(message).length > 0) {
		let errors = []
		for(var prop in message) {
			const currentRules = rules[prop];
			currentRules.map((rule) => {
				if(rule == 'required' && message[prop].value.length < 2) {
					errors.push(`Поле ${message[prop].fieldName} должно быть заполнено`);
				}
				if(rule == 'email' && !validateEmail(message[prop].value)) {
					errors.push(`Введён некорректный e-mail адрес`);
				}
				if(rule == 'mobile' && !validateMobile(message[prop].value)) {
					errors.push(`Введён некорректный мобильный телефон`);
				}
				if(rule == 'url' && !validateUrl(message[prop].value)) {
					errors.push(`Введён некорректный мобильный телефон`);
				}
			})
		}
		return cb(errors);
	} else {
		return cb(['Вы пытались отправить пустую форму']);
	}
}

const validateEmail = email => {
  var reg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
  return reg.test(email)
}

const validateMobile = mobile => {
	const reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	return reg.test(mobile);
}

const validateUrl = url => {
	const reg = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
	return reg.test(url);
}

export default validation;