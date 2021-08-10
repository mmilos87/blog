const { Service } = require('feathers-knex');

exports.Article = class Article extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'article'
    });
  }
  async find(params) {

    return super.find(params);
  }
  async create(data, params) {
    console.log(params.user.id);
    const { text } = data;
    const userId = params.user.id;
    const article = { text, userId };
    return super.create(article, params);
  }
  async update(id, data, params) {
    id=data.id;
    data.userId=params.user.id;
    return super.update(id, data);
  }
  async remove(id, params) {
     id=params.query.aid;
     console.log(id);
    return super.remove(id);
  }
};
