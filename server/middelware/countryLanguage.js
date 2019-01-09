export const isCountryLanguage = (countryLanguage = null) => (
  countryLanguage !== null && (/^[a-z]{2,3}-[a-z]{2,3}$/.test(countryLanguage.toLowerCase()))
);

export const countryLanguageMiddelware = (req, res, next) => {
  const { countryLanguage } = req.params;

  if (!isCountryLanguage(countryLanguage)) {
    return res.status(404).send(`${countryLanguage} is an ivalid country-language!`);
  }

  const [country, language] = countryLanguage.split('-');

  req.params.language = language;
  req.params.country = country;

  return next();
};
