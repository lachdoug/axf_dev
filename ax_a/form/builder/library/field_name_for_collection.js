AxFunctionExtensionsFormBuilderLibrary.prototype.fieldNameForCollection = function(name) {

  if ( name.slice(-2) != "[]" ) {
    name = name + "[]";
  };

  return name;

};
