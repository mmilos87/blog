const { authenticate } = require('@feathersjs/authentication').hooks

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks

const passValidator = async context => {

  const pass = context.data.password;
  if (pass.length < 6 || !pass.match('[A-Z]+')) throw new Error("passwor is not corect");

  return context;
};
const passToLogout = async context => {
  const { arguments, method, app, params } = context;
  const userId = params.user.id;
  const data = { userId };
  params.query.userId = userId;
  if (arguments[0] == "logout" && method == "get") {
    const logOutServic = app.service("/api/v1/user/logout");
    const records = await logOutServic.find(params);
    records.length == 0 ? await logOutServic.create(data, params) : await logOutServic.update(records[0].id, params.query, params);
  }
  return context;
};

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt'),passToLogout],
    create: [passValidator, hashPassword('password')],
    update: [authenticate('jwt')],
    patch: [hashPassword('password'), authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
