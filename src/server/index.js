import express from 'express';
import runWDS from '../../webpack/wds';
import { clientConfig } from '../../webpack';

const App = express();
const { output: { publicPath, filename } } = clientConfig;

App.use('/assets', express.static('build/client'));
	
App.get('/', (_, res) => {
	res.status(200).send(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<title>New App</title>
		</head>
		<body>
			<div id='app'></div>
			<script src='${publicPath}${filename}'></script>
		</body>
		</html>	
	`);
});

App.listen(3000, () => {
	console.info('[express]: App started on: ', 3000);
	
	if (ENV === 'development') {
		runWDS();
	}

});