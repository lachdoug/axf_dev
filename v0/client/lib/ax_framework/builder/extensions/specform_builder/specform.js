AxBuilderExtensionsSpecformBuilder.prototype.specform = function( fieldsSpec, options = {} ) {

  var x = this.cellBuilder.extensionsBuilder;

  var components = function(f) {
    var fields = fieldsSpec.map( function( fieldSpec ) {
      if ( typeof fieldSpec === "string" ) {
        fieldSpec = [ fieldSpec ];
      };
      return f.field( ...fieldSpec );
    } );
    fields.push(
      options.cancel ? f.cancel( options.cancel ) : null,
      f.submit( options.submit )
    );
    return fields;
  };

  return x.form( components, options );

};
