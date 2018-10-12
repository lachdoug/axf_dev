AxFunction.Extensions.Appkit.FormFactory.prototype.field = function(
  name,
  typeOrOptions,
  valueOrOptions,
  fieldOptions
) {

  var axFunction = this.axFunction;
  var a = axFunction.tags;
  var x = axFunction.extensions;
  var f = this;
// debugger
  var options;
  var primaryType;
  var secondaryTypes;
  var input;
  var labelOptions;

  [ primaryType, secondaryTypes, options ] = x.appkit.lib.parseFieldArgs( typeOrOptions, valueOrOptions, fieldOptions )

  // Overwrite the field value from form data, if value exists
  options.value = x.appkit.lib.dataValue( this.data, name ) || options.value;

  var fieldAttributes = Object.assign(
    {
      $fieldChanged: function() {
        var nodes = this.closest("form") ? this.closest("form").querySelectorAll('field dependent') : [];
        nodes.forEach( function( node ) {
          node.$checkDependentField();
        } );
      },
      $dependentMatch: function() {
        if ( options.dependent ) {
          return this.querySelector("dependent").$dependentMatch();
        } else {
          return true;
        }
      }
    },
    options.attributes || {}
  );

  // Build the field based on field type.
  if ( primaryType === "custom" ) {
    input = this.custom( name, secondaryTypes, options );
  } else {
    input = this.basic( name, primaryType, secondaryTypes[0], options );
  };

  var outerwrapperOptions =  {
    attributes: options.outerwrapper,
    label: {
      attributes: typeof options.label === "object" ? options.label : options.label === false ? { $text: false } : options.label ? { $text: options.label } :  { $text: x.lib.titleize( name ) },
      innerwrapper: options.innerwrapper,
      leftwrapper: options.leftwrapper,
      rightwrapper: options.rightwrapper,
      layout: options.layout || primaryType,
      help: typeof options.help === "object" ? options.help : options.help ? x.md( options.help ) : {},
      hint: typeof options.hint === "object" ? options.hint : options.hint ? { $text: options.hint } : {},
    }
   };

  var wrappedField = f.outerwrapper( input, outerwrapperOptions );

  return a.field(
    options.dependent ?
      this.dependent( wrappedField, options.dependent ) :
      wrappedField,
    fieldAttributes
  );

};
