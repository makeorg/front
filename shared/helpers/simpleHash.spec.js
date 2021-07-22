import { simpleHash } from './simpleHash';

describe('simpleHash Function', () => {
  it('check hash values', () => {
    const tests = [
      {
        agent:
          'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/98 Safari/537.4 (StatusCake)',
        hash: '-56975684',
      },
      {
        agent:
          'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
        hash: '-1079114315',
      },
      {
        agent:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
        hash: '1854708677',
      },
      {
        agent: '',
        hash: '0',
      },
    ];

    tests.forEach(item => {
      expect(simpleHash(item.agent)).toBe(item.hash);
    });
  });
});
