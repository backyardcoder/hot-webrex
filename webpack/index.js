
const basePath = process.env.NODE_ENV || 'development';

const serverConfig = require(`./${basePath}/server.config.js`).default;
export const clientConfig = require(`./${basePath}/client.config.js`).default;

export default [
	clientConfig,
	serverConfig
];