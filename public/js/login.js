/**
 * Created by smzdm on 16/5/4.
 */
$("#login-btn").click(function(e){
    e.preventDefault();
    var obj = {};
    obj['username'] = $('#login-name').val();
    obj['password'] = $('#login-pass').val();
    $.post('login',obj,function(data){
        if(data == '0'){
            alert('登录失败,请检查用户名或密码是否正确!');
        }else{
            var location = window.location.search.slice(1);
            window.location.href = window.location.origin + '/' + location;
        }
    })
});