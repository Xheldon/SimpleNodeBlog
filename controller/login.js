var express = require('express');
var router = express.Router();
var $data = require('../model/core').$user;
var $ = require('../controller/util');
var wrap = require('co-express');
var util = require('./util');
// 过滤用户提交的内容
var sanitizeHtml = require('sanitize-html');
router.get('/', wrap(function *(req, res, next) {
    if(!(req.session.user.username == null || req.session.user == null)){
        if(req.headers.referer === undefined){
            // 若已经登录,而直接访问登录地址,则跳转到首页
            res.redirect('/')
        }else{
            // 如果已经登录,仍然访问这个页面,则跳转到来时的地址
            res.redirect(req.headers.referer);
        }
    }else{
        res.render('login');
    }
}));

router.post('/', wrap(function *(req, res, next) {
    var user = sanitizeHtml(req.body['username'], {
            allowedTags: [],
            allowedAttributes: []
        }),
        pw = sanitizeHtml(req.body['password'],{
            allowedTags: [],
            allowedAttributes: []
        }),
        _user = yield $data.getUserByUserName(user);//未找到为null
    if(_user != null && _user['password'] == pw){
        //登录成功
        req.session.user = {
            username: _user.username,
            email: _user.email,
            login: true,
            id: _user._id
        };
        var updateLoginTime = yield $data.updateUserLoginDate(user, util.getDate());
        if(updateLoginTime.ok === 1){
            res.send({code: 0, msg: '登录成功！', data: null});
        }else{
            res.send({code: 2, msg: '登录成功,但最新登陆时间获取失败！', data: updateLoginTime});
        }

    }else{
        res.send({code: 1, msg: '登录失败！', data: null});
    }
}));

module.exports = router;