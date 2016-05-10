var express = require('express');
var router = express.Router();
var $ = require('../controller/util');
var $data = require('../model/core').$post;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', $.extend(req.staticRes,{
        article: []
    }));
});

module.exports = router;
