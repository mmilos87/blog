// Initializes the `users` service on path `/users`
const { Users } = require('./users.class')
const createModel = require('../../models/users.model')
const hooks = require('./users.hooks')

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  }
  // Initialize our service with any options it requires
  app.use('users', new Users(options, app))
  app.use('/api/v1/user', new Users(options, app))
  // Get our initialized service so that we can register hooks
  const service = app.service('api/v1/user');
  service.hooks(hooks)
}
