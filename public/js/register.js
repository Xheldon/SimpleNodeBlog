/**
 * Created by smzdm on 16/5/4.
 */
$(function(){
    $(".j_register").click(function(e){
        e.preventDefault();
        var obj = {};
        obj['username'] = $('.j_username').val() + '';
        obj['password'] = $('.j_password').val() + '';
        obj['email'] = $('.j_email').val();
        if(obj.username.length > 16 || obj.password.length > 16){
            alert('用户名或密码超过16位，请重试！');
            return;
        }
        $.post('register',obj,function(data){
            if(data.code === 0){
                alert('注册成功！');
                window.location.href = '/';
            }else if(data.code === 1){
                alert(data.msg);
            }
        })
    });
});