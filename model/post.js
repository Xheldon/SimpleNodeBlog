var db = require('../model/public').db;
var postCollection = db.get('postcollection');

exports.getPostById = function (id){
    return postCollection.findById(id);
};
exports.getPostByPostTitle = function(title){
    return postCollection.find({'post-title':title});
};