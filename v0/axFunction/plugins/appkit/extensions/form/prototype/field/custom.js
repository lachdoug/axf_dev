ax.extensions.form.custom = function(
  fieldName,
  types,
  options={}
) {

  var f = this;

  // var f.customFields = this.f.customFields( f );

  var primaryType = types[0];

  options.types = types.slice(1);

  // options.attributes = op


// debugger
  if ( f.customFields[primaryType] ) {
    return f.customFields[primaryType]( fieldName, options );
  } else {
    console.error( "Ax error: Custom field type "+ primaryType + " not defined. Field: '" + fieldName + "'." )
    return f.input( fieldName, options );
  };

};
