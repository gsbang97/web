var express = require('express');
var router = express.Router();

/* 도서관리 home page. */
router.get('/', function(req, res, next) {
  res.render('books', { title: '도서관리', name: '홍길동' });
  // render : ejs를 렌더링할 때 사용 즉 페이징을 할 때 사용
});

module.exports = router;
