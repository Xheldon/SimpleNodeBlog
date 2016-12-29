var User = require('../schema/core').$user;
module.exports = {
    getAllUser: function(){
        return User.find({});
    },
    getOneUser: function(options){
        return User.findOne(options.condition);
    },
    addUser: function(options){
        return User.create(options);
    },
    updateUser: function(options){
        return User.update(options.condition, {
            $set: options.update
        });
    }
};