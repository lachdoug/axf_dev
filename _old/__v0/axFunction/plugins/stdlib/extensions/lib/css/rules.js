ax.extensions.lib.css.rules = function( object, selectors ) {

  let css = ax.extensions.lib.css

  var result = ""
  if ( typeof object === "object" ) {
    result += css.rules.rule( object, selectors )
    Object.keys( object).forEach( function( selector ) {
      var selected = object[selector]
      selector.split(",").forEach( function( selectorPart ) {
        selectorPart = selectorPart.trim()
        result += css.rules( selected, selectors.concat( selectorPart ) )
      } )
    } )
  }
  return result

}
