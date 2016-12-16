var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//路由
var routes = require('./controller/index');
var users = require('./controller/users');
var post = require('./controller/post');
var login= require('./controller/login');
var postNew = require('./controller/post-new');
var logout = require('./controller/logout');
var register = require('./controller/register');
//静态资源
var staticRes = require('./config').lib;


var app = express();

//视图模板引擎
app.set('views', path.join(__dirname, 'views'));//view视图文件
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//     app.use(logger('dev'));
    app.use(logger('combined', {
        skip: function (req, res) { return res.statusCode < 400 }
    }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//静态资源文件

app.use(session({
    secret: 'the cake is a lie',
    cookie: {
        maxAge: 60000000//session过期毫秒数
    },
    resave: true,
    saveUninitialized: true
}));


app.use(function(req, res,next){//设置cookie/session
    //cookie 示例
    // if(req.cookies.isVisit){
    //     console.log(req.cookies);
    //     console.log('欢迎再次光临');
    // }else{
    //     res.cookie('isVisit',1,{maxAge: 60*1000});
    //     console.log('欢迎再次光临');
    // }
    //session示例
    if(!req.session.user){
        req.session.user = {
            username: null,
            email: null,
            login: false
        };
    }
    // 向页面输出登录状态
    res.locals.user = req.session.user;
    next();
});

//给每个页面输出静态资源
app.locals.staticRes = staticRes;

// 设置路由
app.use('/', routes);
app.use('/users', users);
app.use('/post', post);
app.use('/login', login);
app.use('/post-new', postNew);
app.use('/logout', logout);
app.use('/register', register);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
