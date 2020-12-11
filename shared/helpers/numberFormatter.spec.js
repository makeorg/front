const {
  formatMillionToText,
  formatCountWithLanguage,
} = require('./numberFormatter');

// @flow
describe('numberFormatter', () => {
  const number = 123456;

  it('formatCountWithLocale with count < 1 million', () => {
    expect(formatCountWithLanguage(number, 'fr')).toEqual(
      number.toLocaleString('FR', 'fr')
    );
  });

  it('formatMillionToText with count < 1 million', () => {
    expect(formatMillionToText(number, 'fr')).toEqual(
      number.toLocaleString('FR', 'fr')
    );
  });

  it('formatMillionToText with count > 1 million', () => {
    expect(formatMillionToText(1234567, 'fr')).toEqual('1.2 common.million');
  });
});
