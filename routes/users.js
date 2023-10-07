var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// LOGIN
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'LOGIN', pageName: 'users/login.ejs'});
});

// JOIN
router.get('/join', function(req, res, next) {
  res.render('index', { title: '회원가입', pageName: 'users/join.ejs'});
});

module.exports = router;
