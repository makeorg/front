// @flow

const postCodeRegexes = new Map();

// FR
postCodeRegexes.set('FR', /^(?:[0-8]\d|9[0-8])\d{3}$/);
// DE
postCodeRegexes.set('DE', /^(?:[0-8]\d|9[0-8])\d{3}$/);

export const regexByCountry = country => postCodeRegexes.get(country) || null;

export const validate = (postcode: string, country: string): boolean => {
  if (!postCodeRegexes.has(country)) {
    // throw Error if country code is unrecognised
    throw Error(`Country code not supported: ${country}`);
  }

  return postCodeRegexes.get(country).test(postcode);
};

export const isSupportedCountry = (country: string): boolean =>
  postCodeRegexes.has(country);

export const html5regexByCountry = country =>
  regexByCountry(country).toString().slice(1, -1);
