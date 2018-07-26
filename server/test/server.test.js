const request = require('request');

describe('Basic server test', () => {
  it('fetches data from api', () => {
    request('http://localhost:3004/locations/33/reviews', async (error, response, body) => {
      const reviews = JSON.parse(body);
      expect(Object.keys(reviews[0])).toContain('id');
    });
  });
});
