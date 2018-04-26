const emailjs = require("emailjs");
const config = require("./config").server;

module.exports = emailjs.server.connect({
  user:	config.smtpuser,
  password: config.smtppassword,
  host:	config.smtphost,
  ssl: true,
});
