// @flow

export const getPhonePrefix = (country: string) => {
  if (country === 'FR') {
    return '0';
  }
  return '(+33)';
};
