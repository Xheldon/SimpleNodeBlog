var express = require('express');
var router = express.Router();
var $data = require('../model/core').$post;
var $ = require('../controller/util');
var wrap = require('co-express');

router.get('/:id', wrap(function *(req,res,next){
    res.render('post',$.extend(req.staticRes,{
        data: yield $data.getPostById(req.params.id)
    }))
}));
module.exports = router;