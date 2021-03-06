## 简介
本项目是我用来研究express的产物，主要是应用层面的东西，对原理层并没有过多的深究。

本项目采用 **`express`** + **`ejs`** + **`mongodb`** + **`co`** 的结构形式，其中：

**`express`** 为框架部分，处理 `request` 和返回 `response` 以及中间的登录、认证过程。

**`ejs`** 为模板引擎，不用我熟悉的 `Handlebar` 是因为一个简单的 `include` 操作还要写辅助函数。而 `ejs` 的 `<% include %>` 的形式和我之前写过的 `jsp` 语法很像。

**`mongodb`** 为数据库部分。

**`co`** 的使用纯粹是受了`Koajs`框架的影响，觉得 `yield` 对于异步的解决方案比 `Promise` 不知道高到哪里去了。主要在路由中使用 `co-express`。


## 项目结构
项目采用典型的 **`MVC`** 结构，其中：

**`schema`** 文件夹是用来存放访问数据库的 `schema` 文件，其对外接口为 `core.js`。

**`model`** 文件夹是用来存放访问 `schema` 的文件，其对外接口为 `core.js`。

**`views`** 文件夹是用来存放模板文件，其中公共部分放在其中的 `public` 和 `side` 中。

**`controller`** 文件夹是用来放置路由的文件，其中总的入口在根目录的 `app.js`里面，**`controller`** 里面是二级路由逻辑。

**`public`** 文件夹放置静态资源，其中lib文件夹放置第三方库文件如`jQuery`、`bootstrap`、`flat-ui`，其他的文件夹为自定义文件。

**`appjs`** 为应用的总入口

**`其他`** 文件都是node里面的常见文件，稍微懂点node的应该都知道，比如 `package.json`、`.gitignore`、`.bowerrc` 等,其中通过 `bower` 安装的文件已经通过 `.bowerrc` 配置,安装在 `/public/lib` 文件夹下。

## Finish List

1. 登录功能
2. 查看已发布文章
3. 发布文章
4. 退出登录
5. 注册功能
6. 话题/分类标签
7. 首页显示的时候是文章简介,而不是全部内容
8. 访问不存在页面的错误处理~~(包括访问post/不带id、id查询文章超过24位等情况)
9. 用户提交内容防嵌入脚本攻击处理/可使用标签白名单
10. 用户登录后更新最新登录时间
11. 翻页处理
12. 增加单元测试框架mocha

## TODO List

### 待加入功能

1. `forever` 的运用和部署在服务器上的研究
2. 用户发送的账户密码加密发送给后端,后端拿到密码加密存进数据库
3. 在 `post-new` 界面加入富文本编辑器
4. 用户评论后更新该文章最新评论时间
5. 记录每篇用户查看数量

### 待优化协同开发体验部分

1. 加入打包工具 `webpack`, 移除 `bower`

## 项目运行基本要求

1. `node 4.x+` 环境,其他版本未做测试
2. `mongodb` 最新即可, [安装地址](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials), 你可能需要 [MongodbGUI](https://www.mongodb.com/download-center/compass?jmp=docs)
3. `express 4.x` 版本
4. 一个支持 `ES6` 语法高亮的 `IDE` (推荐 `Webstrom` ,可能需要设置 `JavaScript ES6` 语法支持)

## 启动项目步骤(假设已经装好了相关的Node、bower等Node必备组件)

1. 启动/配置 `mongodb` (别让我教你启动数据库)
2. 算了我教你吧还是, 启动数据库(假设是默认数据库配置): `mongod --config /usr/local/etc/mongod.conf`
3. `cd` 到项目目录,执行 `npm install` 安装依赖
4. 执行 `bower install`
5. 执行 `npm start`
6. 浏览器打开 `localhost:3000` 即可

## 数据结构

数据库相关信息（地址、端口、数据库名称、文章每页数量、首页文章简介截取字符数等）在根目录下的 `config` 都配置完毕。

## 其他约定

res.send返回的数据格式，总是为：

    {
        code: 0/1  0通常代表代表数据正常，1通常代表数据异常
        msg: code为0时候，msg为空字符串，code不为0的时候，msg为出错信息
        data: code为0时候返回必要数据，无返回数据时候为null；code不为0的时候，返回数据不定
    }


## License

MIT

