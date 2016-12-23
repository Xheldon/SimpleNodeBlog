var express = require('express');
var router = express.Router();
var util = require('../controller/util');
var $data = require('../model/core').$post;
var wrap = require('co-express');
var config = require('../config');


/* GET home page. */
router.get('/', wrap(function*(req, res, next) {
    var page = parseInt(req.query.page);
    var total = yield $data.getAllPostLength();
    if(Number.isNaN(page)){
        page = 1;
    }
    if(typeof page === 'number'){
        res.render('index',{
            data: yield $data.getLimitPost(config.everyPage, (req.query.page - 1) * config.everyPage),
            pagination: util.gotPagination(total, page)
        });
    }else{
        res.redirect('/');
    }
}));

module.exports = router;
