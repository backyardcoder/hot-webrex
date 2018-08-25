import React from 'react';
import express from 'express';
import Markup from './Markup';
import runWDS from '../../webpack/wds';
import ReactDOMServer from 'react-dom/server';

const App = express();
App.use('/assets', express.static('build/client'));

App.get('/', (_, res) => {
  res.status(200).send(`
		<!DOCTYPE html>
		${ReactDOMServer.renderToStaticMarkup(<Markup />)}
	`);
});

App.listen(3000, () => {
  console.info('[express]: App started on: ', 3000);

  if (ENV === 'development') {
    runWDS();
  }
});
