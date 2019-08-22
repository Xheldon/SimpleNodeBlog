/**
 * Created by Xheldon on 16/5/4.
 */
$(function(){
    $("[type='submit']").click(function(e){
        e.preventDefault();
        var obj = {},
            $title = $('#title'),
            $content = $('#content');
        if($title.val().length > 20){
            alert('文章标题不能超过20个字');
            return false;
        }
        if($content.val().length > 2000){
            alert('文章内容不能超过2000个字');
            return false;
        }

        obj['postContent'] = $content.val();
        obj['postTitle'] = $title.val();
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