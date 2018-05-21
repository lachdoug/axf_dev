ACellDslFormBuilder.prototype.labeler = function( field, fieldName, labelerBuilderOptions ) {

  var labelOptions = labelerBuilderOptions["label"] === undefined ? true : labelerBuilderOptions["label"];
  var a = this.cellBuilder;
  var labelText;
  var components;

  var labelTextFor = ( name ) => {
    return this.capitalize(
      this.nameKeys( name ).join(" ").replace(/_/g, " ")
    );
  };

  if ( labelOptions === false ) {
    return field;
  } else if ( labelOptions === true ) {
    labelText = labelTextFor( fieldName );
    components = [ a.label( labelText, { for: field.id } ), field ];
  } else if ( typeof labelOptions === "string" ) {
    labelText = labelTextFor( labelOptions );
    components = [ a.label( labelText, { for: field.id } ), field ];
  } else {
    labelText = labelTextFor( fieldName );
    components = [
      a.label(
        labelText,
        Object.assign( { for: field.id }, labelOptions )
      ),
      field
    ];
  };

  if ( labelerBuilderOptions.reverse ) {
    components.reverse();
  };

  return a.span( components );

};
