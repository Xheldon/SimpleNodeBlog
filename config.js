/**
 * Created by smzdm on 16/4/26.
 */
module.exports = {
    protocol: 'http:',
    port: '3000',
    host:'localhost:3000',
    origin: 'http://localhost:3000',
    hostname:'localhost',
    lib:{
        libJs: ["/lib/jquery/dist/jquery.js",
            "/lib/flat-ui/dist/js/flat-ui.js"],
        libCss: ["/lib/bootstrap/dist/css/bootstrap.css",
            "/lib/flat-ui/dist/css/flat-ui.css"
        ]
    },
    dbaddress: 'localhost',
    dbport: '27017',
    dbname: 'blog',
    everyPage: 10, //首页每页十条数据
    everyPostWordCount: 200
};