import { getRandomFromArray } from './randomFromArray';

describe('Random test', () => {
  it('should give random values', () => {
    const hits = 10000;
    const result = new Map();
    ['one', 'two', 'three'].forEach(item => result.set(item, 0));
    for (let i = 0; i < hits; i += 1) {
      const randomValue = getRandomFromArray(['one', 'two', 'three']);
      result.set(randomValue, result.get(randomValue) + 1);
    }

    const values = Array.from(result, ([, b]) => b);
    const average = values.reduce((a, b) => a + b) / result.size;

    const variance =
      values.map(a => (a - average) ** 2).reduce((a, b) => a + b) / result.size;

    expect(Math.sqrt(variance) / hits).toBeLessThan(0.01);
  });
});
