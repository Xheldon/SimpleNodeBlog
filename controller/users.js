var express = require('express');
var $data = require('../model/core');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    $data.$user.getAllUser(function(data){
        res.render('user',{
            users: data
        });
    });
});

module.exports = router;
