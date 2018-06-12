AxBuilderExtensionsFormBuilder.prototype.fields = function(
  components
) {

  var f = this;

  components = components.map( function(field) {
    if ( typeof field === "string" ) {
      return f.field( field );
    } else if ( field instanceof Array && typeof field[0] === "string" ) {
      return f.field( ...field );
    } else {
      return field;
    };
  } );

  return components;

};
