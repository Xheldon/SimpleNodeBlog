/**
 * Created by Xheldon on 16/5/11.
 */
var $login = $('.j_login'),
    $logout = $('.j_logout');
$(function(){
    if($login.length){
        $login.click(function(e){
            e.preventDefault();
            if(location.pathname === '/login'){
                var obj = {};
                obj['username'] = $('#login-name').val();
                obj['password'] = $('#login-pass').val();
                $.post('login', obj, function(data){
                    if(data == '0'){
                        alert('登录失败,请检查用户名或密码是否正确!');
                    }else{
                        var location = window.location.search.slice(1);
                        window.location.href = window.location.origin + '/' + location;
                    }
                })
            }else{
                window.location = 'http://localhost:3000/login'
            }
        });
    }
    if($logout.length){
        $logout.click(function(e){
            var that = this;
            e.preventDefault();
            if(location.pathname === '/post-new'){
                var isLeave = confirm('即将离开页面,内容可能未保存,是否继续?');
                if(isLeave == true){
                    $.get('/logout', function(data){
                        if(data == '1'){
                            location.reload();
                        }else{
                            alert('退出失败,请重试!');
                            location.reload();
                        }
                    })
                }
            }else{
                $.get('/logout', function(data){
                    if(data == '1'){
                        location.reload();
                    }else{
                        alert('退出失败,请重试!');
                        location.reload();
                    }
                })
            }
        });
    }
});