// Initializes the `logout` service on path `/api/v1/user/logout`
const { Logout } = require('./logout.class');
const hooks = require('./logout.hooks');
const createModel = require('../../models/logout.model');

module.exports = function (app) {
  const options = {
    Model: createModel(app)
  };

  // Initialize our service with any options it requires
           
  app.use('/api/v1/user/logout', new Logout(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('/api/v1/user/logout');

  service.hooks(hooks);
};
