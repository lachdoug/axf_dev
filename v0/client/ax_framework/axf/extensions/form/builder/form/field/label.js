// options.reverse
// options.text
// undefined|true - infer text from name
// false - no text
// string - text
// object - { text: text, reverse: true|false}

AxFrameworkExtensionsFormBuilder.prototype.label = function(
  field, options={}
) {

  var a = this.axFramework.tags;
  var x = this.axFramework.extensions;

  var labelBody;
  if ( options.attributes && options.attributes.$text !== false ) {
    labelBody = a.labeltext( null, options.attributes );
    // debugger
  // } else if ( options.attributes.$text || options.attributes.$html || options.attributes.$components  ) {
  //   labelBody = a.labeltext( options.attributes );
  // } else {

  };

  // var labelOnclick = ;

  var attributes = Object.assign(
    { onclick: field._labelOnclick },
    options.attributes || {},
  );
// debugger
    var helpButton;
    var helpBody;
    if ( options.help && Object.keys(options.help).length > 0 ) {
      helpButton = this.helpbutton();
      helpBody = this.helpbody( options.help );
    };
    var hint;
    if ( options.hint && Object.keys(options.hint).length > 0 ) {
      hint = this.hint( options.hint );
    };
// debugger
    // if ( options.inline ) {
      if ( options.layout === "check" ) {
      //   return a.label( [
      //     a.inlinefield( [ helpBody, field, hint ], options.inline.attributes )
      //     a.inlinelabel( [ labelBody, helpButton ] ),
      //   ], attributes );
      //
      //   return [ a.inline( field, options.inline.attributes ), a.label( [ labelBody, helpButton, hint, helpBody ], attributes ) ];
// debugger
        return a.label(
          a.checklayout( [
            a.leftwrapper( [ field ], options.leftwrapper ),
            a.rightwrapper( [ labelBody, helpButton, hint, helpBody ], options.rightwrapper ),
          ] ),
          attributes
        );

      } else {
      // var inlineOptions =  options.inline === true ? {} : options.inline || {}
        return a.label( [
          a.leftwrapper( [ labelBody, helpButton ], options.leftwrapper ),
          a.rightwrapper( [ helpBody, field, hint ], options.rightwrapper ),
        ], attributes );
      };
    // } else {
    //   if ( options.layout === "check" ) {
    //     return a.label( [ [ field ], [ labelBody, helpButton, hint, helpBody ] ] ], attributes );
    //   } else {
    //     return a.label( [ [ labelBody, helpButton, helpBody , field, hint ] ], attributes );
    //   };
    // };

  // };

};
