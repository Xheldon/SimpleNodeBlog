/**
 * Created by smzdm on 16/5/11.
 */
var express = require('express');
var router = express.Router();
var $data = require('../model/core');
var $ = require('../controller/util');
var wrap = require('co-express');

router.get('/', wrap(function *(req,res,next){
    if(req.session.user.username == null || req.session.user == null){//前者为未登录,后者为已退出
        res.redirect('/login?post-new');
    }else{
        res.render('post-new');
    }
}));
router.post('/',wrap(function *(req,res){
    req.body['postUser'] = req.session.user['username'];
    req.body['postUserId'] = req.session.user['id'];
    req.body['postTags'] = '原创';
    var title = yield $data.$post.getPostByPostTitle(req.body['postTitle']);
    if(title != null){
        //若标题已存在
        res.send({code: 0,msg: '标题已存在'});
    }else{
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();
        req.body['postDate'] = year + '-' + month + '-' + day;
        var data = yield $data.$post.createNewPost(req.body);
        res.send(data['_id']);
    }
}));
module.exports = router;