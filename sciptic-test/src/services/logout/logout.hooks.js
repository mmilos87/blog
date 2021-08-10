const { authenticate } = require('@feathersjs/authentication').hooks;
const { NotAuthenticated } = require('@feathersjs/errors');
const checkIfLocalLogin = async context => {
  console.log(context)
  if(context.params.user.auth0Id='local') throw new NotAuthenticated("logout")
  return context;
}
module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [checkIfLocalLogin],
    get: [],
    create: [],
    update: [],
    patch: [],
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
};
