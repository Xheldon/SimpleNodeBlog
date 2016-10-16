var express = require('express');
var router = express.Router();
var $data = {
    user : require('../model/core').$user,
    post : require('../model/core').$post
};
var $ = require('../controller/util');
var wrap = require('co-express');

router.get('/', wrap(function *(req, res, next) {
    var allUser = yield $data.user.getAllUser();
    console.log(allUser);
    res.render('user-list',{
        users: allUser
    });
}));
router.get('/:id', wrap(function *(req, res, next) {
    if(req.params.id.length > 16){
        var userPost = yield $data.post.getPostByUserId(req.params.id);
    }else{
        userPost = yield $data.post.getPostByUserName(req.params.id);
    }
    if(userPost.length){
        res.render('user',{
            username: userPost[0].postUser,
            userPost: userPost
        })
    }else{
        // 如果查询用户相关的post为空(因为不止一个,所以是个空数组而不是null),转向首页
        res.redirect('/');
    }
}));

module.exports = router;