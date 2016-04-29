/**
 * Created by smzdm on 16/4/27.
 */
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/blog');

exports.db = db;