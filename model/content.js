var db = require('../model/public').db;
var contentCollection = db.get('contentcollection');
var $ = require('../controller/util');
exports.getContent = function (){
    return contentCollection.find();
};