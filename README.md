##简介
本项目是我用来研究express的产物，主要是应用层面的东西，对原理层并没有过多的深究。

本项目采用 **`express`** + **`ejs`** + **`mongodb`** + **`co`** 的结构形式，其中：

**`express`** 为框架部分，处理 `request` 和返回 `response` 以及中间的登录、认证过程。

**`ejs`** 为模板引擎，不用我熟悉的 `Handlebar` 是因为一个简单的 `include` 操作还要写辅助函数。而 `ejs` 的 `<% include %>` 的形式和我之前写过的 `jsp` 语法很像。

**`mongodb`** 为数据库部分。

**`co`** 的使用纯粹是受了`Koajs`框架的影响，觉得 `yield` 对于异步的解决方案比 `Promise` 不知道高到哪里去了。主要在路由中使用 `co-express`。


##项目结构
项目采用典型的 **`MVC`** 结构，其中：

**`schema`** 文件夹是用来存放访问数据库的 `schema` 文件，其对外接口为 `core.js`。

**`model`** 文件夹是用来存放访问 `schema` 的文件，其对外接口为 `core.js`。

**`views`** 文件夹是用来存放模板文件，其中公共部分放在其中的 `public` 和 `side` 中。

**`controller`** 文件夹是用来放置路由的文件，其中总的入口在根目录的 `app.js`里面，**`controller`** 里面是二级路由逻辑。

**`public`** 文件夹放置静态资源，其中lib文件夹放置第三方库文件如`jQuery`、`bootstrap`、`flat-ui`，其他的文件夹为自定义文件。

**`appjs`** 为应用的总入口

**`其他`** 文件都是node里面的常见文件，稍微懂点node的应该都知道，比如 `package.json`、`.gitignore`、`.bowerrc` 等,其中通过 `bower` 安装的文件已经通过 `.bowerrc` 配置,安装在 `/public/lib` 文件夹下。

##Finish List

1. 登录功能
2. 查看已发布文章
3. 发布文章
4. 退出登录

##TODO List

###待加入功能

1. ~~注册功能~~（这部分的数据库需要好好设计）(已完成)
2. ~~退出登录实现（清空 `session` ）~~(已完成)
3. `forever` 的运用和部署在服务器上的研究
4. 用户发送的账户密码加密发送给后端,后端拿到密码加密存进数据库
5. ~~话题/分类标签~~(已完成)
6. 首页显示的时候是文章简介,而不是全部内容,这个后端来截取存进数据库.
7. 在 `post-new` 界面加入富文本编辑器
8. ~~访问不存在页面的错误处理~~(包括访问post/不带id等情况)(已完成)
9. 富文本编辑器防嵌入脚本攻击处理

###待优化协同开发体验部分

1. 开发过程中自动化打包工具 `grunt` 的加入
2. `rquireJS/seaJS` 依赖加载工具的引入的使用

##项目运行基本要求

1. `node 4.x` 环境,其他环境未做测试
2. `mongodb` 最新
3. `express 4.x` 版本
4. 一个支持 `ES6` 语法高亮的 `IDE` (推荐 `Webstrom` ,可能需要设置 `JavaScript ES6` 语法支持)

##启动项目步骤

1. `cd` 到此目录,执行 `npm install` 安装依赖.
2. 执行 `bower install bootstrap`
3. 执行 `bower install jquery`
4. 执行 `bower install flat-ui`
5. 执行 `npm start`

##数据结构

数据库相关信息（地址、端口、数据库名称等）在根目录下的 `config` 都配置完毕。

##License

MIT

