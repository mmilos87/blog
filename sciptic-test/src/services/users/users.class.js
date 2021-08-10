const { Service } = require('feathers-knex')

exports.Users = class Users extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'users'
    })
  }
  async find(params) {
    const {user}=params;
    if(!user){
      const email=params.query.email;
      const query= {email};
      params.query=query;
      return super.find(params);
    }
    params.query.id = params.query.uid || params.user.id;
    if (params.query.uid) delete params.query.uid;
    return super.find(params);
  }
  async create(data, params) {
    return super.create(data, params);
  }
  async update(id, data, params) {
    if (data.oldPass && data.newPass && data._needToUpdate_passToNewHashValue && data._needToUpdate_passToNewHashValue == true) {
      return super.update(id, data);
    }
    id = params.user.id;
    data.email = params.user.email;
    data.auth0Id = params.user.auth0Id;
    data.password = params.user.password;
    return super.update(id, data)
  }
  async get(id, params) {
    params.query.id = id;
    return super.get(id, params);
  }
}
