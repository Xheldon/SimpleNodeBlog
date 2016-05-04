/**
 * Created by smzdm on 16/5/4.
 */
$("[type='submit']").click(function(e){
    e.preventDefault();
    var obj = {};
    obj['post-title'] = $('#title').val();
    obj['post-content'] = $('#content').val();
    $.post('post-new',obj,function(data){
        if(data == '0'){
            alert('该标题已经存在,请换个标题重新尝试');
        }else{
            var id = data['_id'];
            window.location.href = 'post/'+id;
        }
    })
});