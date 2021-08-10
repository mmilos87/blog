// Initializes the `Article` service on path `/api/v1/article`
const { Article } = require('./article.class');
const createModel = require('../../models/article.model');
const hooks = require('./article.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/article', new Article(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/v1/article');

  service.hooks(hooks);
};
