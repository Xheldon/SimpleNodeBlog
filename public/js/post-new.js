/**
 * Created by smzdm on 16/5/4.
 */
$(function(){
    $("[type='submit']").click(function(e){
        e.preventDefault();
        var obj = {};
        obj['postTitle'] = $('#title').val();
        obj['postContent'] = $('#content').val();
        $.post('post-new',obj,function(data){
            console.log(data);
            if(data.code === 0){
                // 数据正常
                window.location.href = 'post/' + data.data + '.html';
            }else{
                // 数据异常
                alert(data.msg);
            }
        })
    });
});