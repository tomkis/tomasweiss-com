import webpack from 'webpack';
import { spawn } from 'cross-spawn';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';

import webpackConfig from './webpack/webpack.config.dev.be';

let serverProcess = null;

const compiler = webpack(webpackConfig);
compiler.watch({}, (err, stats) => {
  if (err) {
    console.error('There was an error while compiling');
    process.exit(1);
  }

  const rawMessages = stats.toJson({}, true);
  const messages = formatWebpackMessages(rawMessages);

  if (messages.errors.length) {
    console.error('Failed to compile.');
    messages.errors.forEach(console.log);
    return;
  }

  if (messages.warnings.length) {
    console.error('Compiled with warnings.');
    messages.warnings.forEach(console.log);
  }

  if (!serverProcess) {
    serverProcess = spawn(
      'node',
      ['dist/server.js'],
      {
        stdio: 'inherit',
        env: process.env
      }
    );

    serverProcess.on('exit', (status) => {
      if (status === 42) {
        serverProcess = null;
      }
    });
  }
});
