/**
 * Created by smzdm on 16/5/11.
 */
var express = require('express');
var router = express.Router();
var $data = require('../model/core');
var $ = require('../controller/util');
var wrap = require('co-express');

router.get('/', wrap(function *(req,res,next){
    if(req.session.user == 0){
        res.redirect('/login?post-new');
    }else{
        res.render('post-new',$.extend(req.staticRes));
    }
}));
router.post('/',wrap(function *(req,res){
    req.body['postuser'] = req.session.user['username'];
    var title = yield $data.$post.getPostByPostTitle(req.body['posttitle']);
    if(title != null){//若查询不存在则title为null
        res.send('0');
    }else{
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();
        var s = year + '-' + month + '-' + day;
        req.body['postdate'] = year + '-' + month + '-' + day;
        var data = yield $data.$post.createNewPost(req.body);
        res.send(data);
    }
}));
module.exports = router;