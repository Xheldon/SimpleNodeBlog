/**
 * Created by Xheldon on 16/5/10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//collection字段类型声明

var UserSchema = new Schema({
    'username': {type:String, required:true},
    'email': {type:String, required: true},
    'password': {type:String, required: true},
    'registerDate': {type: Number, default: Date.now()}
});
UserSchema.index({'username':1});

module.exports = mongoose.model('User',UserSchema);