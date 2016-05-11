/**
 * Created by smzdm on 16/5/11.
 */
var user = require('./user');
var post = require('./post');
var config = require('./../config');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbconfig = config.dbaddress + ':' + config.dbport + '/' +config.dbname;
mongoose.connect(dbconfig,function(err){
    if(err){
        console.error('connect to %s error: ', dbconfig, err.message);
        process.exit(1);
    }
});
module.exports = {
    $user: user,
    $post: post
};