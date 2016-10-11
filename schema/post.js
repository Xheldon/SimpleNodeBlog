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
    'postUser': {type:String,required: true},
    'postUserId': {type: String,required: true},
    'postTags': {type: String,required: true}
});

module.exports = mongoose.model('Post',PostSchema);