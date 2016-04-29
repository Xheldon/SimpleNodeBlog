var express = require('express');
var router = express.Router();
var $data = require('../model/core').$content;
var $ = require('../controller/util');
var wrap = require('co-express');

router.get('/', wrap(function *(req,res,next){
    res.render('content',$.extend(req.staticRes,{
        article: yield $data.getContent()
    }))
}));
module.exports = router;