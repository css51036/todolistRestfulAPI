var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({status : 200,message : 'Welcome to todolist api'});
});

module.exports = router;
