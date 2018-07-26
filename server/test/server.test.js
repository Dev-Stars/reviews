const request = require('request');

describe('Basic server test', () => {
  it('retrieve data from api', (done) => {
    request('http://localhost:3004/locations/33/reviews', (error, response, body) => {
      const reviews = JSON.parse(body);
      expect(Object.keys(reviews[0])).toContain('id');
      done();
    });
  });
});
