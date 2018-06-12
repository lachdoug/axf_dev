AxBuilderExtensionsFormBuilder.prototype.labeler = function( field, fieldName, fieldOptions ) {

  var a = this.cellBuilder.tagBuilder;
  var x = this.cellBuilder.extensionsBuilder;

  var labelText;
  var components;
  var labelOptions = fieldOptions.label === undefined ? true : fieldOptions.label;

  var labelTextFor = ( name ) => {
    return x.lib.capitalize(
      x.lib.nameKeys( name ).join(" ").replace(/_/g, " ")
    );
  };

  if ( labelOptions === false ) {
    return field;
  } else if ( labelOptions === true ) {
    labelText = labelTextFor( fieldName );
    components = [ a.label( labelText, { for: field.id, id: fieldOptions.id + "_label" } ), field ];
  } else if ( typeof labelOptions === "string" ) {
    labelText = labelTextFor( labelOptions );
    components = [ a.label( labelText, { for: field.id, id: fieldOptions.id + "_label" } ), field ];
  } else {
    labelText = labelTextFor( fieldName );
    components = [
      a.label(
        labelText,
        Object.assign( { for: field.id, id: fieldOptions.id + "_label" }, labelOptions )
      ),
      field
    ];
  };

  if ( fieldOptions.reverse ) {
    components.reverse();
  };
// debugger;
  return a.labeledfield( components );

};
