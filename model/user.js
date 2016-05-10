/**
 * Created by smzdm on 16/4/22.
 */
var db = require('../model/public').db;
var mongo = require('mongodb');
var userCollection = db.get('usercollection');

module.exports = {
    getAllUser: function () {
        return userCollection.find();//返回一个数组
    },
    findUserByName: function(username){
        return userCollection.findOne({username:username});//返回一个对象
    },
    testUserIndex:function(){
        userCollection.dropIndex('username');
        return userCollection.indexes();
    }
};