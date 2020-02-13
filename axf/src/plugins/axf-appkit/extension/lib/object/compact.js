ax.extension.lib.object.compact = function( object ) {

  for (const property in object) {
    if ( object[property] && typeof object[property] === 'object' ) {
      this.compact( object[property] )
      if ( !Object.entries( object[property] ).length ) delete object[property]
    } else {
      if ( object[property] === '' || object[property] === undefined || object[property] === null ) delete object[property]
    }
  }

  return object

}
