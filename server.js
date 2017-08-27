import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import App from './src/components/app/App.js'
import generateHTML from './generateHTML.js'
import path from 'path'
import { Helmet } from 'react-helmet'
import config from './config.js'

const app = express();

app.use(config.staticFolder, express.static(__dirname + config.staticFolder));

app.get('*', (req, res) => {
	const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  )
  const helmet = Helmet.renderStatic();
	res.send(generateHTML(html, helmet));
});

app.listen(config.port, err => {
  if(err) return console.log(err)
 	console.log('-> Levelup Web on: ' + config.port);
 	console.log('-> Address: ' + config.domain);
});
