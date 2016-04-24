/**
 * Created by smzdm on 16/4/22.
 */
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/blog');

var userCollection = db.get('usercollection');
exports.getAllUser = function (fn) {
    userCollection.find({},{},function(err,data){
        fn(data);
    });
};