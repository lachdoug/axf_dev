app.secondsToWords = ( seconds, options={} ) => {

    let exact = options.exact

    function numberEnding ( number ) {
        return ( number > 1 ) ? 's' : ''
    }

    var temp = Math.floor( seconds )
    var years = Math.floor( temp / 31536000 )
    if ( years ) {
      return years + ' year' + numberEnding( years )
    }
    var days = Math.floor( ( temp %= 31536000 ) / 86400 )
    if ( days ) {
      return days + ' day' + numberEnding( days )
    }
    var hours = Math.floor( ( temp %= 86400 ) / 3600 )
    if ( hours ) {
      return hours + ' hour' + numberEnding( hours )
    }
    var minutes = Math.floor( ( temp %= 3600 ) / 60 )
    if ( minutes ) {
      return minutes + ' minute' + numberEnding( minutes )
    }
    if ( exact ) {
      return seconds + ' second' + numberEnding( seconds )
    }
    return 'less than a minute'
}
