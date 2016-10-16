var express = require('express');
var router = express.Router();
var $data = require('../model/core').$user;
var $ = require('../controller/util');
var wrap = require('co-express');

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
        _user = yield $data.getUserByUserName(user),//未找到为null
        _email = yield $data.getUserByEmail(email);//未找到为null
    console.log('req.body:' ,req.body,' ;_user:' ,_user, ' _email:',_email);
    if(_user !== null || _email !== null){
        // 该用户名已经注册过
        res.send({code: 1,msg: '该用户名或邮箱已注册，请重试!'});
    }else{
        // 正常注册
        var newUser = yield $data.addUser(req.body);
        console.log('newUser:',newUser);
        req.session.user = {
            username: _user.username,
            email: _user.email,
            login: true,
            id: _user._id
        };
        res.send({code: 0, msg: '注册成功'});
    }
}));

module.exports = router;