/**
 * Created by smzdm on 16/4/22.
 */
var user = require('../model/user');
var post = require('../model/post');
var postNew = require('../model/post-new');

module.exports = {
    $user: user,
    $post: post,
    $postNew: postNew
};