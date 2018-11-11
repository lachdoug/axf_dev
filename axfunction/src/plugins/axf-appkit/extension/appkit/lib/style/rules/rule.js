ax.extension.appkit.lib.style.rules.rule = function( object, selectors ) {

  var result = ""
  Object.keys( object ).forEach( function(property) {
    if ( typeof  object[property] !== "object" ) {
      // Convert property from camelCase to kebab-case
      var kebab =  ( property[0].match(/[A-Z]/) ? "-" : "" ) + property.
        replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
      result += ("\t" + kebab + ": " + object[property] + ";\n")
    }
  } )

  if ( result === "" ) {
    return result
  } else {
    return selectors.join(" ").replace(/\s*<\s*/g, '') +
      " {\n" + result + "\n}\n"
  }

}
