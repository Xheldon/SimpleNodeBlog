var User = require('../schema/core').$user;
module.exports = {
    getAllUser: function(){
        return User.find().exec();
    },
    getUserByUserName: function(username){
        return User.findOne({'username':username}).exec();
    },
    addUser: function(data){
        return User.create(data);
    }
};