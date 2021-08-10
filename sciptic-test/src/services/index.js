const users = require('./users/users.service.js')
const article = require('./article/article.service.js');
const comment = require('./comment/comment.service.js');
const changePassword = require('./change-password/change-password.service.js');
const logout = require('./logout/logout.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(article);
  app.configure(comment);
  app.configure(changePassword);
  app.configure(logout);
}
