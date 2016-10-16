/**
 * Created by Xheldon on 16/5/11.
 */
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    /**
     * 清空session(因为此session是基于cookie的session,即req.session.cookie始终存在无法被设置为null,因此用req.session = null来清空session无效)
     * 或者设置 req.session.user = null也行,其实质是:
     *   Session.prototype.destroy = function(fn){
     *       delete this.req.session;
     *       this.req.sessionStore.destroy(this.id, fn);
     *       return this;
     *   };
     * */
    req.session.destroy();//req.session为undefined
    res.send({code: 0, msg: '退出成功！'});
});
module.exports = router;