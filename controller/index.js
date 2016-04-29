var express = require('express');
var router = express.Router();
var $ = require('../controller/util');
var $shit = require('../model/core').$user;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', $.extend(req.staticRes,{
        $shit: $shit
    }));
});

module.exports = router;
