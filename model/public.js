/**
 * Created by smzdm on 16/4/27.
 */
// var config = require('./../config');
// var mongo = require('mongodb');
// var monk = require('monk');
// var dbconfig = config.dbaddress + ':' + config.dbport + '/' +config.dbname;
// var db = monk(dbconfig);
//
// exports.db = db;

// var config = require('./../config');
// var mongo = require('mongodb');
// // var monk = require('monk');
// var mongoose = require('mongoose');
// var dbconfig = config.dbaddress + ':' + config.dbport + '/' +config.dbname;
// // var db = monk(dbconfig);
// var db = mongoose.connect(dbconfig,function(err,){
//     "use strict";
//     if(err){
//         console.error('connect to %s error: ', dbconfig, err.message);
//         process.exit(1);
//     }
// });
// exports.db = db;