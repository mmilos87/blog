const assert = require('assert');
const app = require('../../src/app');

describe('\'logout\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/v1/user/logout');

    assert.ok(service, 'Registered the service');
  });
});
