import csp from 'helmet-csp';
import { apiUrl, frontUrl } from 'Server/configuration';

export const cspMiddleware = csp({
  // Specify directives as normal.
  directives: {
    baseUri: ["'self'"],
    defaultSrc: ["'none'"],
    fontSrc: ["'self'"],
    scriptSrc: ["'self'", (req, res) => `'nonce-${res.locals.nonce}'`],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: [
      "'self'",
      'https://*.makeorg.tech',
      'https://*.make.org',
      'https://*.placebymake.org',
      'data:',
    ],
    connectSrc: [
      "'self'",
      apiUrl,
      frontUrl,
      'https://*.makeorg.tech',
      'https://*.make.org',
      'https://*.placebymake.org',
    ],
    formAction: ["'self'"],
    frameSrc: ["'none'"],
    objectSrc: ["'none'"],
    mediaSrc: ["'none'"],
    frameAncestors: ["'none'"],
  },
});
