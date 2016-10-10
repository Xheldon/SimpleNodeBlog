var express = require('express');
var router = express.Router();
var $data = require('../model/core').$user;
var $ = require('../controller/util');
var wrap = require('co-express');

router.get('/', wrap(function *(req, res, next) {
    res.render('user',{
        users: yield $data.getAllUser()
    })
}));

module.exports = router;