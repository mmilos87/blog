const { Service } = require('feathers-knex');

exports.ChangePassword = class ChangePassword extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'change_password'
    });
  }
  async create(data, params) {
    data.userId=params.user.id;
    return super.create(data,params);
  }
  async find(params){
    return super.find(params);
  }
};
