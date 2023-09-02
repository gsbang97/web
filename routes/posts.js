var express = require('express');
var router = express.Router();

/* 게시글 page. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: '게시글' });
  // render : ejs를 렌더링할 때 사용 즉 페이징을 할 때 사용
});

module.exports = router;
