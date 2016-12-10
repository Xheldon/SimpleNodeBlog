/**
 * Created by Xheldon on 16/5/10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//collection字段类型声明

var PostSchema = new Schema({
    'postTitle': {type:String, required:true},
    'postContent': {type:String, required: true},
    'postDate': {type:String, required: true},
    'postMonth': {type:String, default: new Date().getMonth() + 1},
    'postYear': {type:String, default: new Date().getFullYear()},
    'postUser': {type:String, required: true},
    'postUserId': {type: String, required: true},
    'postTags': {type: String, default: '原创'},
    'postShortContent': {type: String, required: true},
    'postViewTimes': {type: Number, default: 0},
    'postCommentTimes': {type: Number, default: 0}
});

module.exports = mongoose.model('Post',PostSchema);