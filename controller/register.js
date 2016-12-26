var express = require('express');
var router = express.Router();
var $data = require('../model/core').$user;
var util = require('./util');
var wrap = require('co-express');
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
        res.render('register');
    }
}));

router.post('/', wrap(function *(req, res, next) {
    var user = req.body['username'],
        pw = req.body['password'],
        email = req.body['email'],
        _user = yield $data.getOneUser({
            condition: {
                username: user
            }
        }),//未找到为null
        _email = yield $data.getOneUser({
            condition: {
                email: email
            }
        });//未找到为null
    if(_user !== null || _email !== null){
        // 该用户名已经注册过
        res.send({code: 1,msg: '该用户名或邮箱已注册，请重试!', data: {
            user: _user,
            email: _email
        }});
    }else{
        // 正常注册
        var date = util.getDate();
        req.body['registerDate'] = req.body['lastLoginDate'] = date;
        var newUser = yield $data.addUser(req.body);
        console.log(newUser);
        req.session.user = {
            username: req.body.username,
            email: req.body.email,
            login: true,
            id: newUser._id
        };
        res.send({code: 0, msg: '注册成功', data: null});
    }
}));

module.exports = router;