import { env } from 'Shared/env';

const fs = require('fs');
const { VERSION_PATH } = require('./paths');

let versionData;
try {
  versionData = fs.readFileSync(VERSION_PATH, 'utf8');
} catch (error) {
  if (error.code === 'ENOENT') {
    // eslint-disable-next-line no-console
    console.error('Version file not found');
  } else {
    // eslint-disable-next-line no-console
    console.error('Failed to load version file');
  }
  versionData = '';
}

export function renderVersion(req, res) {
  try {
    res.json(JSON.parse(versionData));
  } catch (error) {
    res.status(404).send('Version file not found');
  }
}

/**
 * robots.txt is set to Allow by default
 * Disallow is set in each nginx configuration to disable robot indexing on tech environments
 * */
export function renderRobot(req, res) {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
}

/**
 * security.txt
 * */
export function renderSecurityTxt(req, res) {
  res.type('text/plain');
  res.send(
    `Contact: ${env.frontUrl()}/FR/contact\nPreferred-Languages: fr, en\nCanonical: ${env.frontUrl()}/.well-known/security.txt`
  );
}
