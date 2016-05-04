var express = require('express');
var router = express.Router();
var $data = require('../model/core');
var $ = require('../controller/util');
var wrap = require('co-express');

router.get('/', wrap(function *(req,res,next){
    res.render('post-new',$.extend(req.staticRes));
}));
router.post('/',wrap(function *(req,res){
    var title = yield $data.$post.getPostByPostTitle(req.body['post-title']);
    if(title.length !== 0){//title经过测试为数组
        res.send('0');
    }else{
        var data = yield $data.$postNew.insertPost(req.body);
        res.send(data);
    }
}));
module.exports = router;