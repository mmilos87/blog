const assert = require('assert');
const app = require('../../src/app');

describe('\'Changepassword\' service', () => {
  it('registered the service', () => {
    const service = app.service('changepassword');

    assert.ok(service, 'Registered the service');
  });
});
