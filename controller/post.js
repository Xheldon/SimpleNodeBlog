var express = require('express');
var router = express.Router();
var $data = require('../model/core').$post;
var $ = require('../controller/util');
var wrap = require('co-express');
router.get('/',wrap(function *(req,res,next){
    res.redirect('/');
}));
router.get('/:id', wrap(function *(req,res,next){
    res.render('post',{
        data: yield $data.getPostById(req.params.id)
    })
}));
module.exports = router;