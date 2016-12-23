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
        var html = '';
        function gotCurrentPage(current){
            return '<li class="active"><a href="/?page=' + current + '" target="_self">'+ current +'</a></li>'
        }
        if(total < 10){
            var htmlArr = [];
            for(var i=1;i<=total;i++){
                if(current > 1){
                    for(var j=1;j<=current;j++){
                        htmlArr.push();
                    }
                }else{

                }
            }
            // 总页数小于十的时候，全部显示页码
            htmlArr = [
                '<li class="previous"><a href="/?page=' + (current -1) + '" class="fui-arrow-left"></a></li>',
                '<li ><a href="/?page=1" target="_self">1</a></li>',
                '<li ><a href="/?page=2" target="_self">1</a></li>',
                '<li ><a href="/?page=1" target="_self">1</a></li>',
            ];
            html +=
        }else{

        }
        if(current > 1){
            html += '<li class="previous"><a href="/?page="' + (current - 1) + ' class="fui-arrow-left"></a></li>'
        }
        html +=
    };








