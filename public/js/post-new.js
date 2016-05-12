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
        obj['posttitle'] = $('#title').val();
        obj['postcontent'] = $('#content').val();
        $.post('post-new',obj,function(data){
            if(data == '0'){
                alert('该标题已经存在,请换个标题重新尝试');
            }else{
                window.location.href = 'post/' + data;
            }
        })
    });
});