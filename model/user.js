/**
 * Created by smzdm on 16/4/22.
 */
var db = require('../model/public').db;
var userCollection = db.get('usercollection');
exports.getAllUser = function () {
        return userCollection.find();//返回一个数组
};
exports.findUserByName = function(username){
    return userCollection.findOne({username:username});//返回一个对象
};