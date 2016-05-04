/**
 * Created by smzdm on 16/4/22.
 */
var db = require('../model/public').db;
var postCollection = db.get('postcollection');
var $ = require('../controller/util');
exports.insertPost = function (obj){
    return postCollection.insert(obj);
};