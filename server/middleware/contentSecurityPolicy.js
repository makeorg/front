import csp from 'helmet-csp';
import { apiUrl, frontUrl } from 'Server/configuration';

export const cspMiddleware = csp({
  // Specify directives as normal.
  directives: {
    baseUri: ["'self'"],
    defaultSrc: ["'none'"],
    fontSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      'https://connect.facebook.net',
      'https://staticxx.facebook.com',
      (req, res) => `'nonce-${res.locals.nonce}'`,
    ],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: [
      "'self'",
      'https://*.makeorg.tech',
      'https://*.make.org',
      'https://*.placebymake.org',
      'https://*.facebook.com',
      'https://*.facebook.net',
      'data:',
    ],
    connectSrc: [
      "'self'",
      apiUrl,
      frontUrl,
      'https://*.makeorg.tech',
      'https://*.make.org',
      'https://*.placebymake.org',
      'https://*.facebook.com',
      'https://*.facebook.net',
    ],
    formAction: ["'self'", 'https://www.facebook.com/tr/'],
    frameSrc: ['https://*.facebook.com'],
    objectSrc: ["'none'"],
    mediaSrc: ["'none'"],
    frameAncestors: ["'none'"],
  },
});
