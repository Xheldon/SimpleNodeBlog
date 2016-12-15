/**
 * Created by smzdm on 16/5/11.
 */
var express = require('express');
var router = express.Router();
var $data = require('../model/core');
var config = require('../config');
var $ = require('../controller/util');
var wrap = require('co-express');
// 过滤用户提交的内容
var sanitizeHtml = require('sanitize-html');

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

    var clearTitle = sanitizeHtml(req.body['postTitle']),
    clearContent = sanitizeHtml(req.body['postContent']);
    var title = yield $data.$post.getPostByPostTitle(clearTitle);
    console.log(clearTitle,clearContent);
    if(title != null){
        //若标题已存在
        res.send({code: 0,msg: '标题已存在'});
    }else{
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();
        req.body['postDate'] ='于' + year + '年' + month + '月' + day + '日' + hour + '点' + min + '分' + sec + '秒发布';

        if(clearContent.length >= 200){
            req.body['postShortContent'] = clearContent.slice(0, config.everyPostWordCount) + '. . .';
        }else{
            req.body['postShortContent'] = clearContent;
        }
        var data = yield $data.$post.createNewPost(req.body);
        res.send(data['_id']);
    }
}));
module.exports = router;