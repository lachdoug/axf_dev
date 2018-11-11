ax.extensions.lib.css.rules.rule = function( object, selectors ) {

  var result = ""
  Object.keys( object ).forEach( function(property) {
    if ( typeof  object[property] !== "object" ) {
      // Convert property from camelCase to kebab-case
      var kebab =  ( property[0].match(/[A-Z]/) ? "-" : "" ) + property.
        replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
      result += ("\t" + kebab + ": " + object[property] + ";\n")
    }
  } )
  result = result === "" ? "" : selectors.join(" ") + " {\n" + result + "\n}\n"
  return result

}
