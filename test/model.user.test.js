var User = require('../model/core').$user;
var expect = require('chai').expect;

describe('User model API test', function() {
    it('getAllUser', function() {
        console.log(User.getAllUser());
        // expect(User.getAllUser()).to.contain('foo');
        User.getAllUser(function(err, data){

            // expect(User.getAllUser()).to.be.an('object');
        });
    });
});