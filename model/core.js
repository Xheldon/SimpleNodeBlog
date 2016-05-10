/**
 * Created by smzdm on 16/4/22.
 */
// var user = require('../model/user');
// var post = require('../model/post');
// var postNew = require('../model/post-new');
//
// module.exports = {
//     $user: user,
//     $post: post,
//     $postNew: postNew
// };

/**
 * Created by smzdm on 16/4/22.
 */
var user = require('../model/user');
var post = require('../model/post');
var postNew = require('../model/post-new');
var config = require('./../config');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbconfig = config.dbaddress + ':' + config.dbport + '/' +config.dbname;
mongoose.connect(dbconfig,function(err,){
    if(err){
        console.error('connect to %s error: ', dbconfig, err.message);
        process.exit(1);
    }
});
module.exports = {
    $user: user,
    $post: post,
    $postNew: postNew
};