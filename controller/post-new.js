var express = require('express');
var router = express.Router();
var $data = require('../model/core');
var $ = require('../controller/util');
var wrap = require('co-express');

router.get('/', wrap(function *(req,res,next){
    if(req.session.user == 0){
        res.redirect('../login?post-new');
    }else{
        res.render('post-new',$.extend(req.staticRes));
    }
}));
router.post('/',wrap(function *(req,res){
    req.body['post-user'] = req.session.user['username'];
    var title = yield $data.$post.getPostByPostTitle(req.body['post-title']);
    if(title.length !== 0){//title经过测试为数组
        res.send('0');
    }else{
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            data = yield $data.$postNew.insertPost(req.body);
        req.body['post-date'] = year + '-' + month + '-' + day;
        res.send(data);
    }
}));
module.exports = router;