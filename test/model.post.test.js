var Post = require('../model/core').$post;
var expect = require('chai').expect;

module.exports = function() {
    it('getPostsCount', function() {
        return Post.getPostsCount({
            condition: {}
        }).then(function(data){
            expect(data).to.be.a("number");
        });
    });
    it('getSomePosts', function() {
        return Post.getSomePosts({condition: {
            postUserId: '58660f43643fda0b113b0ad3'
        }}).then(function(data){
            expect(data).to.be.an("array");
        });
    });
    it('getOnePost is NOT exist', function() {
        return Post.getOnePost({condition: {
            postUser: 'this name is create for test getOnePost API'
        }}).then(function(data){
            expect(data).to.be.a("null");
        });
    });
    it('getOnePost is exist', function() {
        return Post.getOnePost({condition: {
            postUser: 'test'
        }}).then(function(data){
            expect(data).to.be.a("object");
        });
    });

};