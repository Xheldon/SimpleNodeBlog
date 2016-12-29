var User = require('../model/core').$user;
var expect = require('chai').expect;

describe('User model API test', function() {
    it('getAllUser', function() {
        // expect异步断言API
        return User.getAllUser().then(function(data){
            expect(data).to.be.an("array");
        });
    });
    it('getOneUser-user is exist', function() {
        // expect异步断言API
        return User.getOneUser({condition: {
            username: 'test'
        }}).then(function(data){
            expect(data).to.be.an("object");
        });
    });
    it('getOneUser-user is NOT exist', function() {
        // expect异步断言API
        return User.getOneUser({condition: {
            username: 'you don\'t know the power of darkness'
        }}).then(function(data){
            expect(data).to.be.a("null");
        });
    });
    it('addUser-success', function() {
        // expect异步断言API
        return User.addUser({
            username: 'This is for test of addUser API',
            password: '1',
            email: '1',
            registerDate: new Date(),
            // lastLoginDate: new Date()
        }).then(function(data){
            expect(data).to.be.an("object");
        }).reject(function a() {
            console.log(arguments)
        });
    });
    it('getAllUser', function() {
        // expect异步断言API
        return User.getAllUser().then(function(data){
            expect(data).to.be.an("array");
        });
    });
});