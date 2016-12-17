/**
 * Created by Xheldon on 16/5/10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//collection字段类型声明

var PostSchema = new Schema({
    'postTitle': {type:String, required:true},
    'postContent': {type:String, required: true},
    'postCreateAt': {type:String, required: true},
    'postShortContent': {type: String, required: true},
    'postUpdateAt': {type: String, required: true},
    'postUser': {type:String, required: true},
    'postUserId': {type: String, required: true},
    // postStatus分三种，show 展示中, edit 编辑中, hide 被隐藏, draft 草稿
    'postStatus': {type: String, default: 'show'},
    'postMonth': {type:String, default: new Date().getMonth() + 1},
    'postYear': {type:String, default: new Date().getFullYear()},
    'postTags': {type: String, default: '原创'},
    'postViewCount': {type: Number, default: 0},
    'postCommentsCount': {type: Number, default: 0},
    'postAllowComments': {type: Boolean, default: true},

});

module.exports = mongoose.model('Post',PostSchema);