import questionApi from './questionApi';
import { logger } from './logger';

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const serveStatic = require('serve-static');
const csp = require('express-csp');
require('./browserPolyfill');
const reactRender = require('./reactRender');
const { BUILD_DIR, IMAGES_DIR } = require('./paths');
const configuration = require('./configuration');


function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0');
  }
}

// App
const app = express();
app.use(compression());

app.use(bodyParser.json());

// Static files
app.use('/assets', express.static(BUILD_DIR, {
  maxAge: '1y',
  setHeaders: setCustomCacheControl
}));

app.use('/images', express.static(IMAGES_DIR, {
  maxAge: '1y',
  setHeaders: setCustomCacheControl
}));

// Routes
app.get('/api/questions/:questionSlug', questionApi);

app.get('/', (req, res) => {
  const detectedCountry = req.headers['x-forced-country'] || req.headers['x-detected-country'] || 'FR';
  res.redirect(`/${detectedCountry}`);
});

app.get('/:country/consultation/:questionSlug/selection', reactRender);
app.get('/:country*', reactRender);

// CSP
csp.extend(app, {
  policy: {
    directives: {
      'base-uri': 'self',
      'script-src': ['self', '*.facebook.net', '*.facebook.com', '*.google.com', 'unsafe-inline'],
      'img-src': ['self', '*.facebook.com'],
      'style-src': ['unsafe-inline'],
      'font-src': 'self',
      'object-src': 'none',
      'media-src': 'none',
      'connect-src': ['self', '*.makeorg.tech', '*.make.org'],
      'form-action': ['self', '*.facebook.com'],
      'child-src': ['self', '*.facebook.com', '*.google.com']
    }
  }
});

app.post('/api/logger', (req, res) => {
  logger.log(
    req.body.level,
    req.body.data
  );

  return res.sendStatus(204);
});

app.listen(configuration.port, configuration.host);
