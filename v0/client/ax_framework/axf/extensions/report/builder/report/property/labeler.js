AxFrameworkExtensionsReportBuilder.prototype.labeler = function( property, propertyName, propertyOptions ) {

  var a = this.axFramework.tags;
  var x = this.axFramework.extensions;

  var labelText;
  var components;
  var labelOptions = propertyOptions.label === undefined ? true : propertyOptions.label;

  var labelTextFor = ( name ) => {
    return x.lib.capitalize(
      x.lib.nameKeys( name ).join(" ").replace(/_/g, " ")
    );
  };

  if ( labelOptions === false ) {
    return property;
  } else if ( labelOptions === true ) {
    labelText = labelTextFor( propertyName );
    components = [ a.label( labelText, { for: property.id, id: propertyOptions.id + "_label" } ), property ];
  } else if ( typeof labelOptions === "string" ) {
    labelText = labelTextFor( labelOptions );
    components = [ a.label( labelText, { for: property.id, id: propertyOptions.id + "_label" } ), property ];
  } else {
    labelText = labelTextFor( propertyName );
    components = [
      a.label(
        labelText,
        Object.assign( { for: property.id, id: propertyOptions.id + "_label" }, labelOptions )
      ),
      property
    ];
  };

  if ( propertyOptions.reverse ) {
    components.reverse();
  };
// debugger;
  return components;

};
