AxFrameworkExtensions.prototype.css = function( styles, options={} ) {

  var a = this.a;

  var objectToRules = function( object, selectors) {
    var result = "";

    if ( typeof object === "object" ) {
      result += defineRule( object, selectors );
      Object.keys( object).forEach( function( selector ) {
        var selected = object[selector];
        // if ( typeof selected === "object" ) {
          selector.split(",").forEach( function( selectorPart ) {
            // if ( selectorPart === "helptext" ) { debugger }
            selectorPart = selectorPart.trim();
            // result += defineRule( selected, selectors.concat( selectorPart ) );
            result += objectToRules( selected, selectors.concat( selectorPart ) );
          } );
        // } else {

        // };

      } );
    };
    return result;
  };

  var defineRule = function(  object, selectors ) {
    var result = "";
    Object.keys( object ).forEach( function(property) {
      if ( typeof  object[property] !== "object" ) {
        // Convert property from camelCase to kebab-case
        var kebab =  ( property[0].match(/[A-Z]/) ? "-" : "" ) + property.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
        result += ("\t" + kebab + ": " + object[property] + ";\n");
      }
    } );
    result = result === "" ? "" : selectors.join(" ") + " {\n" + result + "\n}\n";
    return result;
  };

  return a.style( typeof styles === "string" ? styles : objectToRules( styles, options.scope ? [ options.scope ] : [] ) );

};
