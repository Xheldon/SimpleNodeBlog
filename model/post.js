var db = require('../model/public').db;
var postCollection = db.get('postcollection');

module.exports = {
    getPostById: function (id){
        return postCollection.findById(id);
    },
    getPostByPostTitle: function(title){
        return postCollection.find({'post-title':title});
    },
    getSomePost: function(obj){
        return postCollection.find({},{
            limit: obj.start,
            sort: {
                "post-date": 1
            }
        })
    }
};