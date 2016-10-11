
var Post = require('../schema/core').$post;

module.exports = {
    getAllPost: function(){
        return Post.find().exec();
    },
    getPostById: function(id){
        return Post.findOne({'_id':id}).exec();
    },
    createNewPost: function(data){
        return Post.create(data);
    },
    getPostByPostTitle: function(title){
        return Post.findOne({'postTitle':title});
    },
    getPostByUserId: function(id){
        return Post.find({postUserId: id});
    }
};