import React from 'react';
import { ServerRouter, createServerRenderContext } from 'react-router';
import { renderToString } from 'react-dom/server';

import App from '../components/app/app';

/**
 * Renders the app, including routing to the current URL, from the server-side
 * for performance and/or accessibility advantages.
 */
export default function (req, res, model) {
  const context = createServerRenderContext();

  model = model || {};

  const markup = renderToString(
    <ServerRouter
      location={req.url}
      context={context}>
      <App model={model} />
    </ServerRouter>
  );

  const appName = 'React Progressive Forms Example';

  res.end(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${appName}</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link rel="stylesheet" href="/assets/styles.css">
      </head>
      <body>
        <div id="root">${markup}</div>

        <script id="model" type="application/json">${JSON.stringify(model)}</script>
        <script src="/output/public/client.js"></script>
      </body>
    </html>`);
}