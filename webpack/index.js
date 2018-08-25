const basePath = process.env.NODE_ENV || 'development';
const clientsExports = require(`./${basePath}/client.config.js`);
const serverConfig = require(`./${basePath}/server.config.js`).default;

export const clientConfig = clientsExports.default;
export const cssFileName = clientsExports.cssFileName;

export default [clientConfig, serverConfig];
