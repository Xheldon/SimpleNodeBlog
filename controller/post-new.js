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

    var dirtyTitle = req.body['postTitle'],
        dirtyContent = req.body['postContent'];

    //title不允许使用任何html标签，此时过滤一遍title中的html标签和属性，只存储其中的text，在ejs输出中再过滤一遍
    req.body['postTitle'] = sanitizeHtml(dirtyTitle,{
        allowedTags: [],
        allowedAttributes: []
    });

    var clearContent = sanitizeHtml(dirtyContent, {
        allowedTags: [],
        allowedAttributes: []
    });
    // 展示在文章列表的简介，不允许使用任何标签, 只保留其中的文本
    req.body['postShortContent'] = clearContent.length >= config.everyPostWordCount ?
    clearContent.slice(0, config.everyPostWordCount) + '. . .' : clearContent;

    // 文章详情页中content中只允许使用指定的标签
    req.body['postContent'] = sanitizeHtml(dirtyTitle, {
        allowedTags: config.whiteListOfHTMLTags,
        allowedAttributes: config.whiteListOfHTMLTagsAttr,
        allowedClasses: config.allowedClasses,
        allowedSchemes: config.allowedSchemes,
        transformTags: config.transformTags(sanitizeHtml)
    });
    var title = yield $data.$post.getPostByPostTitle(req.body['postTitle']);
    if(title != null){
        //若标题已存在
        res.send({code: 1, msg: '标题已存在', data: null});
    }else{
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();
        req.body['postDate'] = year + '-' + month + '-' + day;
        req.body['postLastEdit'] = year + '年' + month + '月' + day + '日' + hour + '点' + min + '分' + sec + '秒';

        var data = yield $data.$post.createNewPost(req.body);
        console.log(req.body);
        res.send({code: 0, msg: '', data: data['_id']});
    }
}));
module.exports = router;