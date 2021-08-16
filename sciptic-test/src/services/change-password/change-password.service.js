// Initializes the `ChangePassword` service on path `/changepassword`
const { ChangePassword } = require('./change-password.class');
const createModel = require('../../models/change-password.model');
const hooks = require('./change-password.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app) 
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/user/changepass', new ChangePassword(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('/api/v1/user/changepass');

  service.hooks(hooks);
};
