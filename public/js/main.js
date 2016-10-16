/**
 * Created by Xheldon on 16/5/11.
 */
var $login = $('.j_login'),
    $logout = $('.j_logout');
$(function(){
    if($logout.length){
        $logout.click(function(e){
            var that = this;
            e.preventDefault();
            if(location.pathname === '/post-new'){
                var isLeave = confirm('即将离开页面,内容可能未保存,是否继续?');
                if(isLeave == true){
                    $.get('/logout', function(data){
                        if(data.code === 0){
                            location.reload();
                        }else{
                            alert(data.msg);
                            location.reload();
                        }
                    })
                }else{
                    $.noop();
                }
            }else{
                $.get('/logout', function(data){
                    if(data.code === 0){
                        location.reload();
                    }else{
                        alert(data.msg);
                        location.reload();
                    }
                })
            }
        });
    }
});