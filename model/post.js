
var Post = require('../schema/core').$post;

module.exports = {
    getPostsCount: function(options){
        return Post.find(options.condition).count();
    },
    getSomePosts: function(options){
        if(!options.limitNum){
            options.limitNum = 0;
        }
        if(!options.skipNum){
            options.skipNum = 0;
        }
        return Post.find(options.condition).sort({_id: -1}).limit(options.limitNum).skip(options.skipNum);
    },
    getOnePost: function(options){
        return Post.findOne(options.condition);
    },
    createNewPost: function(options){
        return Post.create(options);
    }
};