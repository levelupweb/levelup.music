import axios from 'axios';
import config from '../../config.js'

export function axiosAuth(options) {
	var authAxios = axios.create({
		headers: {
			authorization: config.token
		}
	})
	return authAxios(options)
}