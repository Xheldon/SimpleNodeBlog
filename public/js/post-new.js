/**
 * Created by smzdm on 16/5/11.
 */
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
            if(data.code === 0){
                alert(data.msg);
            }else{
                window.location.href = 'post/' + data;
            }
        })
    });
});