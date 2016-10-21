
var Post = require('../schema/core').$post;

module.exports = {
    getAllPost: function(){
        return Post.find().sort({_id: -1}).exec();
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
        return Post.find({postUserId: id}).sort({_id: -1});
    },
    getPostByUserName: function(username){
        return Post.find({postUser: username}).sort({_id: -1});
    }
};