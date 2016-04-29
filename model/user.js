/**
 * Created by smzdm on 16/4/22.
 */
var db = require('../model/public').db;
var userCollection = db.get('usercollection');
exports.getAllUser = function () {
        return userCollection.find();
};