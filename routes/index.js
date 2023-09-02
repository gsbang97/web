var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '익스프레스' });
  // render : ejs를 렌더링할 때 사용 즉 페이징을 할 때 사용
});

module.exports = router;
