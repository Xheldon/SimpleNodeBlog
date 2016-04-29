/**
 * Created by smzdm on 16/4/27.
 */
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