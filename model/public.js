/**
 * Created by smzdm on 16/4/27.
 */
var config = require('./../config');
var mongo = require('mongodb');
var monk = require('monk');
var dbconfig = config.dbaddress + ':' + config.dbport + '/' +config.dbname;
var db = monk(dbconfig);

exports.db = db;