const { Service } = require('feathers-knex');
exports.Logout = class Logout extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'logout'
    });
  }
  async create(data, params) {
    return super.create(data, params);
  }
  async find(params) {
    return super.find(params);
  }
  async update(id, data, params) {
    return super.update(id,data,params)
  }
};
