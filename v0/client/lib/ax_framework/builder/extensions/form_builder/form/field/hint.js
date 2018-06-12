AxBuilderExtensionsFormBuilder.prototype.hint = function( options ) {

    var a = this.cellBuilder.tagBuilder;

    var content = options.hint;

    if ( typeof content === "string" ) {
      return a.hint( content );
    } else if ( typeof content === "object" ) {
      return content;
    } else {
      return null;
    };

};
