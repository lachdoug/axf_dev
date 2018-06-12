function AxBuilderExtensionsCssBuilder( cellBuilder ) {

  var a = cellBuilder.tagBuilder;

  this.css = function( styles ) {

    var objectToRules = function( object, selectors=[]) {
      var result = "";
      if ( typeof object === "object" ) {
        Object.keys( object).forEach( function( selector ) {
          var selected = object[selector];
          result += defineRule( selected, selectors.concat( selector ) );
          result += objectToRules( selected, selectors.concat( selector ) );
        } );
      };
      return result;
    };

    var defineRule = function(  object, selectors ) {
      var result = selectors.join(" ") + " {\n";
      Object.keys( object).forEach( function(property) {
        if ( typeof  object[property] !== "object" ) {
          // Convert property from camelCase to kebab-case
          var kebab = property.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
          result += ("\t" + kebab + ": " + object[property] + ";\n");
        }
      } );
      result += "\n}\n";
      return result;
    };

    return a.style( typeof styles === "string" ? styles : objectToRules( styles ) );

  };

};
