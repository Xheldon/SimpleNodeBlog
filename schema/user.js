/**
 * Created by Xheldon on 16/5/10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var getDate = function(){
    var date = new Date();
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' + date.getMilliseconds()
};

//collection字段类型声明
var UserSchema = new Schema({
    'username': {type:String, required:true},
    'email': {type:String, required: true},
    'password': {type:String, required: true},
    'registerDate': {type: String, required: true},
    'lastLoginDate': {type: String, required: true},
    'phone': {type: String, default: ''},
    'registerWay': {type: String, default: 'web'},
    'nickname': {type: String, default: ''}
});
UserSchema.index({'username':1});

module.exports = mongoose.model('User',UserSchema);