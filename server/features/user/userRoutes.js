const userCtrl = require('./userCtrl.js');

module.exports = app => {
  app.route('/api/user')
    .get(userCtrl.getUser)
    .post(userCtrl.postUser)
  }
