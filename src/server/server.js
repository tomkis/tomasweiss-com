import React from 'react';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import bodyParser from 'body-parser';

import isProduction from 'helpers/isProduction';
import getAppName from 'helpers/getAppName';
import buildStore from '../store';
import webpackConfig from '../../webpack/webpack.config.dev.fe';

const getJsFileName = (appName) => {
  if (isProduction) {
    return `${appName}.min.js`;
  }

  return `${appName}.js`;
};

export default (dependencyProvider) => {
  const appName = getAppName();
  const server = express();

  if (isProduction) {
    server.use('/', express.static('./dist/client'));
  } else {
    server.use('/', express.static('./static'));
    const compiler = webpack(webpackConfig);
    server.use(webpackDevMiddleware(compiler, {
      publicPath: '/',
      serverSideRender: true,
      noInfo: true,
      stats: {
        colors: true
      }
    }));
    server.use(webpackHotMiddleware(compiler));
  }

  server.use(bodyParser.urlencoded({ extended: false }));

  server.post('/api/v1/hire-me', (req, res) => {
    res
      .status(202)
      .send();
  });

  server.get('/', (req, res) => {
    const Root = dependencyProvider.getRoot();
    const rootReducer = dependencyProvider.getRootReducer();
    const rootSaga = dependencyProvider.getRootSaga();

    const store = buildStore(
      rootReducer,
      rootSaga
    );

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="author" content="Tomas Weiss" />
          <title>Tomas Weiss</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" >
          <link rel="stylesheet" href="/tomasweiss-com-0.1.0.min.css" />
        </head>
        <body>
          <div id="root">${renderToString((
            <Provider store={store}>
              <Root />
            </Provider>
          ))}</div>
          <script type="text/javascript">
            window.reduxState = '${JSON.stringify(store.getState())}';
          </script>
          <script src="/${getJsFileName(appName)}"></script>
          <script src='https://slideslive.com/embed_presentation.js'></script>
          <script>
              embed = new SlidesLiveEmbed('presentation-embed-38898340', {
                  presentationId: '38898340',
                  autoPlay: false // change to true to autoplay the embedded presentation
              });
          </script>
        </body>
      </html>
    `);
  });

  server.listen(process.env.PORT || 3000);
};
