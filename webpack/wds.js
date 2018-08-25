import webpack from 'webpack';
import { clientConfig } from './';
import webpackDevServer from 'webpack-dev-server';

export default function runWDS() {
  const devServerOptions = clientConfig.devServer;
  const { host, port } = devServerOptions;

  webpackDevServer.addDevServerEntrypoints(clientConfig, devServerOptions);
  const compiler = webpack(clientConfig);
  const server = new webpackDevServer(compiler, devServerOptions);

  server.listen(port, host, () => {
    console.info(`[webpack-dev-server]: Dev server running on ${host}:${port}`);
  });
}
