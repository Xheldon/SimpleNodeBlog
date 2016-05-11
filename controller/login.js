var express = require('express');
var router = express.Router();
var $data = require('../model/core').$user;
var $ = require('../controller/util');
var wrap = require('co-express');

router.get('/', wrap(function *(req, res, next) {
    res.render('login',$.extend(req.staticRes));
}));

router.post('/', wrap(function *(req, res, next) {
    var user = req.body['username'],
        pw = req.body['password'],
        _user = yield $data.getUserByUserName(user);//未找到为null
    if(_user != null && _user['password'] == pw){
        //登录成功
        req.session.user = {
            username: _user.username,
            email: _user.email,
            login: true
        };
        res.send('1');
    }else{
        res.send('0');
    }
}));

module.exports = router;