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
    // 文章简介字数，超过则显示省略号
    everyPostWordCount: 200,
    whiteListOfHTMLTags: [ 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
        'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
        'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
    whiteListOfHTMLTagsAttr: {
        a: [ 'href', 'name', 'target' ],
        // We don't currently allow img itself by default, but this
        // would make sense if we did
        img: [ 'src' ]
    },
    allowedClasses: {
        'a': [ 'underline', 'simple' ],
        'code': ['test']
    },
    // 允许的协议格式(当前设置为不允许任何格式除了base64 data)，可设置的有 http,https,data,ftp,mailto
    allowedSchemes: [],
    // 提交的标签输出时候都是小写
    lowerCaseHTMLTags: true,
    // 提交的标签进行转换
    transformTags: function(transformUtil){
        return {
            // simpleTransform有三个参数 newTag, newAttributes, shouldMerge
            // shouldMerge默认为true代表当前标签属性全部复制到newAttributes中
            'ol' : transformUtil.simpleTransform('ul', {class: 'foo'})
        }
    }
};