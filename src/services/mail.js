import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import config from '../utils/config';

export default (data, url) => axios({
  method: 'POST',
  url: config.domain + url,
  data,
})
  .then(({ data }) => {
    if (data.isSended) {
      NotificationManager.success('Сообщение успешно отправлен', 'Успех');
      return Promise.resolve();
    }
    NotificationManager.error('Сообщение успешно отправлен', 'Ошибка');
    return Promise.reject();
  })
  .catch((err) => {
    if (err.response && err.response.status === 422) {
      NotificationManager.error('Пожалуйста, заполните форму правильными данными', 'Ошибка');
      return Promise.reject(err);
    }
    if (err.response && err.response.data === 'string') {
      NotificationManager.error(err.response.data, 'Ошибка');
      return Promise.reject(err);
    }
    return Promise.reject(err);
  });
