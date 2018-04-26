const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config').server;
const { checkContactData, emailContactHandler } = require('./emailContact');

const React = require('react');
const { renderToString } = require('react-dom/server'); 
const { Helmet } = require('react-helmet');
const StaticRouter = require('react-router-dom/StaticRouter').default; // es6 hack
const App = require('./src/components/app/').default; // es6 hack
const document = require('./document'); 

const https = require('https');
const http = require('http');

const key = fs.readFileSync('ssl/key.key', 'utf8');
const cert = fs.readFileSync('ssl/cert.crt', 'utf8');

const app = express();

app.use(config.static, express.static(path.join(__dirname, config.static)));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  const html = renderToString(React.createElement(StaticRouter, {
    location: req.url,
    context: {},
    children: React.createElement(App, {}),
  }));

  res.send(document(html, Helmet.renderStatic()));
});

app.post(config.contactposturl, [...checkContactData], emailContactHandler);

let server;

if (process.env.SSL === 'true') {
  server = https.createServer({ key, cert }, app);
} else {
  server = http.createServer(app);
}

server.listen(config.port, (err) => {
  if (err) return console.log(err);
 	console.log(`-> Levelup Music on: ${config.port}`);
 	console.log(`-> Address: ${config.hosturl}`);
});
