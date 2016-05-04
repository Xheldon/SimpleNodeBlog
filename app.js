var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./controller/index');
var users = require('./controller/users');
var post = require('./controller/post');
var post_new = require('./controller/post-new');

var staticRes = require('./config').lib;


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//view视图文件
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//静态资源文件

app.use(function(req,res,next){//设置静态资源
    req.staticRes = staticRes;
    next();
});

app.use(session({
    secret: 'the cake is a lie',
    cookie: {
        maxAge: 60*1000
    },
    resave: true,
    saveUninitialized: true
}));


app.get('/',function(req, res,next){//设置cookie/session
    //cookie 示例
    // if(req.cookies.isVisit){
    //     console.log(req.cookies);
    //     console.log('欢迎再次光临');
    // }else{
    //     res.cookie('isVisit',1,{maxAge: 60*1000});
    //     console.log('欢迎再次光临');
    // }

    //session示例
    if(req.session.isVisit){
        req.session.isVisit++;
        console.log('再次见面很高兴!',req.session.isVisit);
    }else{
        req.session.isVisit = 1;
        console.log('初次见面很高兴!',':',req.session);
    }


    next();
});


app.use('/', routes);
app.use('/users', users);
app.use('/post', post);
app.use('/post-new', post_new);



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
