AxFrameworkExtensionsFormBuilder.prototype.hint = function( options ) {

    var a = this.axFramework.tags;

    // var options = options.hint;
// debugger
    if ( typeof options === "string" ) {
      return a.hint( options );
    } else if ( typeof options === "object" ) {
      return a.hint( options.text, options.attributes );
    } else {
      return null;
    };

};
