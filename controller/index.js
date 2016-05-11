var express = require('express');
var router = express.Router();
var $ = require('../controller/util');
var $data = require('../model/core').$post;
var wrap = require('co-express');


/* GET home page. */
router.get('/', wrap(function*(req, res, next) {
    res.render('index',$.extend(req.staticRes,{
        data: yield $data.getAllPost()
    }))
}));

module.exports = router;
