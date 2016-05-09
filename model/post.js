var db = require('../model/public').db;
var postCollection = db.get('postcollection');

module.exports = {
    getPostById: function (id){
        return postCollection.findById(id);
    },
    getPostByPostTitle: function(title){
        return postCollection.find({'post-title':title});
    }
};