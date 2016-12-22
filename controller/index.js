var express = require('express');
var router = express.Router();
var $ = require('../controller/util');
var $data = require('../model/core').$post;
var wrap = require('co-express');
var config = require('../config');


/* GET home page. */
router.get('/', wrap(function*(req, res, next) {
    var page = parseInt(req.query.page);
    if(typeof page === 'number' && page > 1){
        res.render('index',{
            data: yield $data.getLimitPost(config.everyPage, (req.query.page - 1) * config.everyPage)
        });
    }else{
        res.render('index',{
            data: yield $data.getLimitPost(config.everyPage, 0)
        })
    }
}));

module.exports = router;
