const { Service } = require('feathers-knex');

exports.Comment = class Comment extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'comment'
    });
  }
  async find(params) { 
    return super.find(params);}
  async create(data, params) {
    console.log(data);
    const { text, articleId } = data;
    const userId = params.user.id;
    const coment = { text, articleId, userId };
    return super.create(coment, params);
  }
  async find(params) {
    return super.find(params);
  }
  async update(id, data, params) {
    id=data.id;
    data.userId=params.user.id;
    return super.update(id, data, params);
  }
  async remove(id, params) {
    id=params.query.cid;
    return super.remove(id);
  }
};
