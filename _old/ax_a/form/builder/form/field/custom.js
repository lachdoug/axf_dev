AxFunctionExtensionsFormBuilder.prototype.custom = function(
  fieldName,
  types,
  options={}
) {

  var f = this;

  var customFields = this.customFields();

  var primaryType = types[0];

  options.types = types.slice(1);

  // options.attributes = op


// debugger
  if ( customFields[primaryType] ) {
    return customFields[primaryType]( fieldName, options );
  } else {
    console.error( "Ax error: Custom field type "+ primaryType + " not defined. Field: '" + fieldName + "'." )
    return f.input( fieldName, options );
  };

};
