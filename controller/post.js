var express = require('express');
var router = express.Router();
var $data = require('../model/core').$post;
var $ = require('../controller/util');
var wrap = require('co-express');
router.get('/',wrap(function *(req,res,next){
    res.redirect('/');
}));
router.get('/:id.html', wrap(function *(req,res,next){
    // 防止Mongoose的CastError
    if(req.params.id.length !== 24){
        res.redirect('/');
    }else{
        var data = yield $data.getPostById(req.params.id);
        if(!data){
            res.redirect('/');
        }else{
            res.render('post',{
                data: data
            })
        }
    }
}));
module.exports = router;