var User = require('../schema/core').$user;
module.exports = {
    getAllUser: function(){
        return User.find().exec();
    },
    getUserByUserName: function(username){
        return User.findOne({'username':username}).exec();
    },
    getUserByEmail: function(email){
        return User.findOne({'email': email}).exec();
    },
    addUser: function(data){
        return User.create(data);
    }
};