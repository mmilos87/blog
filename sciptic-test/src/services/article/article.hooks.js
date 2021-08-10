const { authenticate } = require('@feathersjs/authentication').hooks;

const whoIsAutor = require('../../hooks/who-is-autor');

const limitTextLength = require('../../hooks/limit-text-length');

module.exports = {
  before: {
    all: [  ],
    find: [],
    get: [],
    create: [authenticate('jwt'), limitTextLength()],
    update: [authenticate('jwt'), whoIsAutor(), limitTextLength()],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt'), whoIsAutor()]
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
};
