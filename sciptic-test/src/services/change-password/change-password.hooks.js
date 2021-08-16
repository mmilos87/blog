const { authenticate } = require('@feathersjs/authentication').hooks;
const checkOldPasss = async context => {
  const { app, service, data, params } = context;
  const query = { id: params.user.id };
  params.query = query;
//proverava jel ispravanja stara sifra
  const user = await app.service('users').find(params); 
  const localStrategy =  app.service('/authentication').strategies.local;
  console.log(data.oldPass)
  await localStrategy.comparePassword(user.data[0], data.oldPass).catch(() => {throw new Error("old password is not correct")});
  // provera jeu li stara i nova sifra iste 
  if (data.oldPass == data.newPass) throw new Error("old  and new password must be different");
  //kad proveri ako nisu iste, provera jeli nova sifra ista kao predhodna stara u bazi podataka
  //ako nije
  params.query={userId:params.user.id}
  const records = await service.find(params);
  if (records.length >0) { 
    if (records.some(record=>record.oldPass==data.newPass)) throw new Error("the new password has  been already used");
  }
  context.params.newPass= await localStrategy.hashPassword(data.newPass);
  delete context.data.newPass;
  return context;
}
const updatePass = async context => {
  const { data, app,params } = context; 
  data.id=data.userId;
  delete data.oldPass;
  delete data.userId;
  data._needToUpdate_passToNewHashValue = true;
  data.password = params.newPass;
  data.email = context.params.user.email;
  data.name = context.params.user.name;
  data.auth0Id = context.params.user.auth0Id; 
  const update = await app.service('users').update(data.id, data);
  return context;
}

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [checkOldPasss],
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
