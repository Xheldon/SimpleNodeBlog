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
    res.render('user-list',{
        users: allUser
    });
}));
router.get('/:id.html', wrap(function *(req, res, next) {
    var userPost,user;
    if(req.params.id.length > 16){
        userPost = yield $data.post.getSomePosts({
            condition: {
                postUserId: req.params.id
            }
        });
        user = yield $data.user.getOneUser({
            condition: {
                _id: req.params.id
            }
        });
    }else{
        userPost = yield $data.post.getSomePosts({
            condition: {
                postUser: req.params.id
            }
        });
        user = yield $data.user.getOneUser({
            condition: {
                username: req.params.id
            }
        });
    }
    if(userPost.length){
        res.render('user',{
            havePost: true,
            username: user.username,
            userPost: userPost
        })
    }else{
        // 如果查询用户相关的post为空(因为不止一个,所以是个空数组而不是null)
        res.render('user',{
            havePost: false,
            username: user.username
        })
    }
}));

module.exports = router;