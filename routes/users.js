var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // send : 문자열을 보낼 때 사용 (html, json, xml, ...)
});

module.exports = router;
