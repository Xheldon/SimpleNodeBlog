var express = require('express');
var router = express.Router();
var $data = require('../model/core').$user;
var $ = require('../controller/util');
var wrap = require('co-express');

router.get('/', wrap(function *(req, res, next) {
    console.log(yield $data.testUserIndex());
    res.render('user',$.extend(req.staticRes,{
        users: yield $data.getAllUser()
    }))
}));

module.exports = router;