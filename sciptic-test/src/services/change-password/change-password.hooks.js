const { authenticate } = require('@feathersjs/authentication').hooks;
const checkOldPasss = async context => {
  const { app, serice } = context;
  //if(context.data.oldPass!==context.params.user.password)throw new Error("old password is not correct");
  //provera i iz baze 
  return context;
}
const updatePass = async context => {
  const { data, app } = context;
  data._needToUpdate_passToNewHashValue = true;
  data.password = data.newPass;
  data.email = context.params.user.email;
  data.name = context.params.user.name;
  data.auth0Id = context.params.user.auth0Id;
  const update = await app.service('users').update(data.userId, data);
  return context;
}
const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [hashPassword("oldPass"), hashPassword("newPass"),
      checkOldPasss],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [updatePass],
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
