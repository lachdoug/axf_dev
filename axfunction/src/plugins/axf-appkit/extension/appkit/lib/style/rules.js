ax.extension.appkit.lib.style.rules = function( object, selectors ) {

  let style = this

  var result = ""
  if ( typeof object === "object" ) {
    result += style.rules.rule( object, selectors )
    Object.keys( object).forEach( function( selector ) {
      var selected = object[selector]
      selector.split(",").forEach( function( selectorPart ) {
        selectorPart = selectorPart.trim()
        result += style.rules( selected, selectors.concat( selectorPart ) )
      } )
    } )
  }
  return result

}
