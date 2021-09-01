// Application hooks that run for every service
const { MethodNotAllowed } = require('@feathersjs/errors');
const patchRestrict = async context => {
  if (!(context.data.githubId||context.data.googleId)) {
    throw new MethodNotAllowed("Patch is not allowed")
  }
  return context;
 }

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [patchRestrict],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
