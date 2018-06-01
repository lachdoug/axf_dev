AcellBuilderExtensionsSpecformBuilder.prototype.specform = function( formSpec, options = {} ) {

  var x = this.cellBuilder.extensionsBuilder;

  var contentFunction = function(f) {
    var components = formSpec.map( function( fieldSpec ) {
      if ( typeof fieldSpec === "string" ) {
        fieldSpec = [ fieldSpec ];
      };
      return f.field( ...fieldSpec );
    } );
    components.push(
      options.cancel ? f.cancel( options.cancel ) : null,
      f.submit( options.submit )
    );
    return components;
  };

  return x.form( contentFunction, options );

};
