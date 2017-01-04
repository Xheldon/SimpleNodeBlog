var User = require('../model/core').$user;
var expect = require('chai').expect;



module.exports = function() {
    it('getAllUser', function() {
        return User.getAllUser().then(function(data){
            expect(data).to.be.an("array");
        });
    });
    it('getOneUser-user is exist', function() {
        return User.getOneUser({condition: {
            username: 'Test'
        }}).then(function(data){
            expect(data).to.be.an("object");
        });
    });
    it('getOneUser-user is NOT exist', function() {
        return User.getOneUser({condition: {
            username: 'you don\'t know the power of darkness'
        }}).then(function(data){
            expect(data).to.be.a("null");
        });
    });
    it('addUser', function() {
        return User.addUser({
            username: 'This is a test for addUser API' + new Date(),
            password: '1',
            email: '1',
            registerDate: new Date(),
            lastLoginDate: new Date()
        }).then(function(data){
            expect(data).to.be.an("object");
        });
    });
    it('updateUser', function() {
        return User.updateUser({
            condition: {
                _id: '58660f43643fda0b113b0ad3'
            },
            update: {
                username: 'test updateUser API' + new Date()
            }
        }).then(function(data){
            expect(data.ok).to.be.equal(1);
        });
    });
};