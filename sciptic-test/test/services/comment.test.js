const assert = require('assert');
const app = require('../../src/app');

describe('\'Comment\' service', () => {
  it('registered the service', () => {
    const service = app.service('comment');

    assert.ok(service, 'Registered the service');
  });
});
