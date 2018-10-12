AxFunctionExtensionsFormBuilderLibrary.prototype.fieldValueForCollection = function( value ) {

  if ( !( value instanceof Array ) ) {
    if ( value ) {
      value = [ value ];
    } else {
       value = [];
    };
  };

  return value;

};
