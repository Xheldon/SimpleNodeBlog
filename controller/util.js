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