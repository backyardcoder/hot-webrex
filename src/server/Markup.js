import React from 'react';
import { clientConfig } from '../../webpack';
const { output: { publicPath, filename } } = clientConfig;

const Markup = () =>  {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="ie=edge" />
				<title>New App</title>
			</head>
			<body>
				<div id='app'></div>
				<script src={ `${publicPath}${filename}` }></script>
			</body>
		</html>	
	);	
}

export default Markup;