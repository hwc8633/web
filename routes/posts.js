var express = require('express');
var router = express.Router();

/* posts page. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: '익스프레스', name: '홍길동' });
});

module.exports = router;
