ax.factory.object.base.$ = function( ...selectors ) {
  let result = this
  selectors.forEach( function( selector ) {
    if ( ax.type.is.array( selector ) ) {
      result = result.$( ...selector )
    } else if ( /^\^\S*$/.test( selector ) ) {
      result = ax.factory.object.traverse( result, selector )
    } else if ( /\^/.test( selector ) ) {
      selector = selector.split(/(\^\S*)/g)
      result = result.$( ...selector )
    } else {
      result = ax.factory.object.traverse( result, selector )
    }
  } )
  return result
}
