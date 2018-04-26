
const emailServer = require("./emailServer");
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
const config = require('./config').server;

const emailBody = data => `
  <html><body> 
    <h1>Новое сообщение с сайта Music.levelupworlds.com</h1>
    <p>С сайта Music.levelupworlds.com пришло новое сообщение от потенциального клиента</p>
    <ul>
      <li>Имя клиента: ${data.name || 'Не указано'}</li>
      <li>E-mail: ${data.email || 'Не указано'}</li>
      <li>Номер телефона: ${data.phone || 'Не указано'}</li>
      <li>Сообщение: ${data.message || 'Не указано'}</li>
    </ul>
  </body></html>
`;


module.exports.checkContactData = [
  check('name')
    .exists()
    .withMessage("Не заполнено поле 'Имя'"),
  check('email')
    .exists()
    .withMessage("Не заполнено поле 'Email"),
  check('email')
    .isEmail()
    .trim()
    .normalizeEmail()
    .withMessage('Неверный формат Email адреса'),
  check('phone')
    .exists()
    .withMessage('Не заполнено поле "Контактный телефон"'),
  check('message')
    .optional()
    .isLength({
      min: 1,
      max: 1000,
    })
    .withMessage('Сообщение не может быть больше 1000 символов'),
];

module.exports.emailContactHandler = (req, res) => {
  const data = matchedData(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.mapped(),
    });
  }

  const message	= {
    text: 'Новое сообщение с сайта Music.Levelupworlds.com',
    from: config.mail.sender,
    to: `<${config.mail.receiever}>`,
    subject: 'Новое сообщение с сайта Music.Levelupworlds.com',
    attachment: [{
      data: emailBody(req.body),
      alternative: true,
    }],
  };

  return emailServer.send(message, (err, message) => {
    if (err) {
      console.log('Send Error: ', err);
      return res.status(500).send(err);
    }
    return res.status(200).json({ isSended: true });
  });
};
