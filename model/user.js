var User = require('../schema/core').$user;
module.exports = {
    getAllUser: function(cb){
        return User.find({}).exec(cb);
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