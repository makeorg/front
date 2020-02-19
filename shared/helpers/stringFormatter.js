/* @flow */

export const capitalize = (
  name: string,
  lowerRest?: boolean = true,
  locales?: string[]
): string => {
  if (!name) {
    return name;
  }
  const separators = [' ', '-'];
  return separators.reduce(
    (accumulator, separator) =>
      accumulator
        .split(separator)
        .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(separator),
    lowerRest ? name.toLocaleLowerCase(locales) : name
  );
};

export const formatUserName = (name: string, locales?: string[]): string => {
  return capitalize(name, true, locales);
};

export const formatOrganisationName = (
  name: string,
  locales?: string[]
): string => {
  return capitalize(name, false, locales);
};

export const formatAuthorName = (name: string, locales?: string[]): string => {
  return capitalize(name, true, locales);
};
