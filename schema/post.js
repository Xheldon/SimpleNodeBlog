/**
 * Created by Xheldon on 16/5/10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//collection字段类型声明

var PostSchema = new Schema({
    'posttitle': {type:String, required:true},
    'postcontent': {type:String, required: true},
    'postdate': {type:String, required: true},
    'postuser': {type:String,required: true}
});

module.exports = mongoose.model('Post',PostSchema);