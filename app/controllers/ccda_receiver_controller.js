var config = require('../../config');

var Controller = module.exports = {};

Controller.main = function(req, res, next) {
  console.log('requesd main');
  res.render('ccda_receiver/main',
    {
      user: req.user, 
      publicUri: config.publicUri
    });
};
