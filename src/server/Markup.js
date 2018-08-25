import React from 'react';
import { clientConfig, cssFileName } from '../../webpack';
const {
  output: { publicPath, filename }
} = clientConfig;

const Markup = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>New App</title>
        {ENV !== 'development' && (
          <link rel="stylesheet" href={`${publicPath}${cssFileName}`} />
        )}
      </head>
      <body>
        <div id="app" />
        <script src={`${publicPath}${filename}`} />
      </body>
    </html>
  );
};

export default Markup;
