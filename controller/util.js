/**
 * Created by smzdm on 16/4/27.
 */
function _ifAddZero(num){
    if(num < 10){
        return '0' + num;
    }else{
        return num
    }
}

function _gotCurrentPage(current, total){
    var arr = [];
    for(var i=1;i<=current;i++){
        if(i===current){
            arr.push('<li class="active"><a href="/?page=' + i + '" target="_self">'+ i +'</a></li>');
        }else{
            arr.push(_gotSinglePage(i));
        }
    }
    for(var j=current+1;j<=total;j++){
        arr.push(_gotSinglePage(j));
    }
    return arr;
}
function _gotSinglePage(num) {
    return '<li><a href="/?page=' + num + '" target="_self">'+ num +'</a></li>';
}
function _gotMultiPage(from, to) {
    var arr = [];
    for(var a=from;a<=to;a++){
        arr.push(_gotSinglePage(from));
    }
    return arr.join('');
}
exports.extend = function() {
        var options, name, src, copy,
            target = arguments[ 0 ] || {},
            i = 1,
            length = arguments.length;

        for ( ; i < length; i++ ) {
            // Only deal with non-null/undefined values
            if ( ( options = arguments[ i ] ) != null ) {
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];

                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }
                    target[ name ] = copy;
                }
            }
        }
        // Return the modified object
        return target;
    };
    exports.getDate = function(){
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            millSec = date.getMilliseconds();
            return _ifAddZero(year) + '-' +
                _ifAddZero(month) + '-' +
                _ifAddZero(day) + ' ' +
                _ifAddZero(hour) + ':' +
                _ifAddZero(min) + ':' +
                _ifAddZero(sec) + ':' +
                _ifAddZero(millSec);
    };
    exports.gotPagination = function(total, current){
        var htmlArr = [];
        if(total < 10){
            // 总页数小于十的时候，全部显示页码
            if(current > 1){
                // 当前页码大于1时
                if(current < total){
                    htmlArr = _gotCurrentPage(current, total);
                    htmlArr.unshift('<li class="previous"><a href="/?page=' + (current -1) + '" class="fui-arrow-left"></a></li>');
                    htmlArr.push('<li class="next"><a href="/?page='+ (current+1) +'" class="fui-arrow-right"></a></li>');
                }else{
                    htmlArr = _gotCurrentPage(current, total);
                    htmlArr.unshift('<li class="previous"><a href="/?page=' + (current -1) + '" class="fui-arrow-left"></a></li>');
                }
            }else{
                // 当前页码为1时
                if(current < total){
                    htmlArr = _gotCurrentPage(current, total);
                    htmlArr.push('<li class="next"><a href="/?page='+ (current+1) +'" class="fui-arrow-right"></a></li>');
                }else{
                    htmlArr = _gotCurrentPage(current, total);
                }
            }
        }else{
            // 总页数大于10的时候，全部显示页码，分情况显示
            if(current === 1){
                htmlArr.push('<li class="active"><a href="/?page=1" target="_self">1</a></li>');
                htmlArr.push(_gotMultiPage(2, 5));
                htmlArr.push('<li>...</li><li>...</li>');
                htmlArr.push(_gotMultiPage((total-3), total));
                htmlArr.push('<li class="next"><a href="/?page=2" class="fui-arrow-right"></a></li>');
            }else if(current === 2){
                htmlArr.push('<li class="previous"><a href="/?page=1" class="fui-arrow-left"></a></li>');
                htmlArr.push(_gotSinglePage(1));
                htmlArr.push('<li class="active"><a href="/?page=2" target="_self">2</a></li>');
                htmlArr.push(_gotMultiPage(3, 5));
                htmlArr.push('<li>...</li><li>...</li>');
                htmlArr.push(_gotMultiPage((total-3), total));
                htmlArr.push('<li class="next"><a href="/?page=3" class="fui-arrow-right"></a></li>');
            }else if(current === 3){
                htmlArr.push('<li class="previous"><a href="/?page=1" class="fui-arrow-left"></a></li>');
                htmlArr.push(_gotMultiPage(1, 2));
                htmlArr.push('<li class="active"><a href="/?page=3" target="_self">3</a></li>');
                htmlArr.push('<li>...</li><li>...</li>');
                htmlArr.push(_gotMultiPage((total-3), total));
                htmlArr.push('<li class="next"><a href="/?page=3" class="fui-arrow-right"></a></li>');
            }else if(current > 3){
                if(current < total -5){
                    htmlArr.push('<li><a href="/?page=1" target="_self">首页</a></li>');
                    htmlArr.push('<li class="previous"><a href="/?page='+ (current-1) +'" class="fui-arrow-left"></a></li>');
                    htmlArr.push(_gotMultiPage(current - 2, current - 1));
                    htmlArr.push('<li class="active"><a href="/?page='+ current +'" target="_self">'+ current +'</a></li>');
                    htmlArr.push(_gotMultiPage(current + 1, current + 2));
                    htmlArr.push('<li>...</li><li>...</li>');
                    htmlArr.push(_gotMultiPage(total - 2, total));
                    htmlArr.push('<li class="next"><a href="/?page='+ (current+1) +'" class="fui-arrow-right"></a></li>');
                }else{
                    htmlArr.push('<li><a href="/?page=1" target="_self">首页</a></li>');
                    htmlArr.push('<li class="previous"><a href="/?page='+ (current-1) +'" class="fui-arrow-left"></a></li>');
                    htmlArr.push(_gotMultiPage(total - 7, current - 1));
                    htmlArr.push('<li class="active"><a href="/?page='+ current +'" target="_self">'+ current +'</a></li>');
                    if(current < total){
                        htmlArr.push(_gotMultiPage(current + 1, total));
                        htmlArr.push('<li class="next"><a href="/?page='+ (current+1) +'" class="fui-arrow-right"></a></li>');
                    }

                }
            }
        }
    return htmlArr.join('');
    };
