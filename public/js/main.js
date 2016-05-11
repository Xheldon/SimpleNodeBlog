/**
 * Created by Xheldon on 16/5/11.
 */
$(document).on('click','#logout',function(e){
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