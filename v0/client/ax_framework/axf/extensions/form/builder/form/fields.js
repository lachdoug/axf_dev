// options
// .attributes - for <fields> tag
// .field - merged with options on each field

AxFrameworkExtensionsFormBuilder.prototype.fields = function(
  components,
  options={}
) {

  var a = this.axFramework.tags;
  var x = this.axFramework.extensions;
  var f = this;

  components = components.map( function(field) {

    var fieldOptions = options.field || {};
    if ( typeof fieldOptions === "function" ) {
      fieldOptions = fieldOptions( field );
    };

    if ( typeof field === "string" ) {
      return f.field( field, fieldOptions );
    } else if ( field instanceof Array ) {

      var args = [ ...field ];
      var lastArg = args.slice(-1)[0];

      // If last arg is an array, it must be the field value.
      if ( typeof lastArg === "object" && !( lastArg instanceof Array ) ) {

        lastArg.outerwrapper = Object.assign(
          {},
          fieldOptions.outerwrapper || {},
          lastArg.outerwrapper || {},
        );

        lastArg.leftwrapper = Object.assign(
          {},
          fieldOptions.leftwrapper || {},
          lastArg.leftwrapper || {},
        );

        lastArg.rightwrapper = Object.assign(
          {},
          fieldOptions.rightwrapper || {},
          lastArg.rightwrapper || {},
        );

        lastArg.input = Object.assign(
          {},
          fieldOptions.input || {},
          lastArg.input || {},
        );

        lastArg.label = Object.assign(
          typeof fieldOptions.label === "object" ? fieldOptions.label : ( fieldOptions.label === false ? { $text: false } : { $text: fieldOptions.label } ),
          typeof lastArg.label === "object" ? lastArg.label : ( lastArg.label === false ? { $text: false } : { $text: lastArg.label } )
        );

        lastArg.hint = Object.assign(
          typeof fieldOptions.hint === "object" ? fieldOptions.hint : fieldOptions.hint ? { $text: fieldOptions.hint } : {},
          typeof lastArg.hint === "object" ? lastArg.hint : lastArg.hint ? { $text: lastArg.hint } : {},
        );

        lastArg.help = Object.assign(
          typeof fieldOptions.help === "object" ? fieldOptions.help : fieldOptions.help ? x.md( fieldOptions.help ) : {},
          typeof lastArg.help === "object" ? lastArg.help : lastArg.help ? x.md( lastArg.help ) : {},
        );

        lastArg.layout = fieldOptions.layout || lastArg.layout;
        // debugger

        args[ args.length - 1 ] = lastArg;

      } else {
        args.push( fieldOptions );
      };
      return f.field( ...args );
    } else {
      return field;
    };
  } );

  return a.fields( components, options.attributes );

};
