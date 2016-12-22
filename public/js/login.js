var $login = $('.j_login');
if($login.length){
    $login.click(function(e){
        e.preventDefault();
        if(location.pathname === '/login'){
            var obj = {};
            obj['username'] = $('.j_username').val() + '';
            obj['password'] = $('.j_password').val() + '';
            $.post('login', obj, function(data){
                if(data.code === 1){
                    alert(data.msg);
                    console.log(data.data);
                }else if(data.code === 0){
                    var location = window.location.search.slice(1);
                    window.location.href = window.location.origin + '/' + location;
                }
            })
        }else{
            window.location = 'http://localhost:3000/login';
        }
    });
}