/**
 * Created by Xheldon on 16/5/11.
 */
$(function(){
    $('#logout').click(function(e){
        e.preventDefault();
        $.get('/logout',function(data){
            if(data == '1'){
                alert('退出成功!');
                location.reload();
            }else{
                alert('退出失败,请重试!');
                location.reload();
            }
        })
    });
});