ax.extensions.form.factory.field.caption = function(
  caption,
  options={}
) {

  let components = caption ? [ caption ] : [ options.label, options.helpindicator ]

  // // if ( typeof label === 'object' ) {
  //   // components
  // // } else {
  // //   components
  // // }
  //
  // let a = ax.a
  // let x = ax.x
  //
  // let helpindicator = a.helpindicator(
  //   null,
  //   {
  //     $html: "&#x25BE;",
  //     _up: function( boolean ) {
  //       if ( boolean ) {
  //         this.$html = "&#x25B4;"
  //       } else {
  //         this.$html = "&#x25BE;"
  //       }
  //     }
  //   }
  // )
  //
  // if ( options.help ) {
  //   components.push( " " )
  //   components.push( helpindicator )
  // }
  //
  // let captionTag = Object.assign(
  //   { onclick: function() { this._toggleHelp() } },
  //   options.captionTag
  // )

  return ax.a.caption( components, options.captionTag )

};



// options.reverse
// options.text
// undefined|true - infer text from name
// false - no text
// string - text
// object - { text: text, reverse: true|false}

// ax.extensions.form.label = function(
//   field, options={}
// ) {
// // debugger
//   var a = ax.a;
//   var x = this.axFunction.extensions;
//
//   var labelBody;
//   if ( options.attributes && options.attributes.$text !== false ) {
//     labelBody = a.labeltext( null, options.attributes );
//     // debugger
//   // } else if ( options.attributes.$text || options.attributes.$html || options.attributes.$components  ) {
//   //   labelBody = a.labeltext( options.attributes );
//   // } else {
//
//   };
//
//   // var labelOnclick = ;
//
//   var attributes = Object.assign(
//     { onclick: field.$labelOnclick },
//     // options.attributes || {},
//   );
// // debugger
//     var helpButton;
//     var helpBody;
//     if ( options.help && Object.keys(options.help).length > 0 ) {
//       helpButton = this.helpbutton();
//       helpBody = this.helpbody( options.help );
//     };
//     var hint;
//     if ( options.hint && Object.keys(options.hint).length > 0 ) {
//       hint = this.hint( options.hint );
//     };
// // debugger
//     // if ( options.inline ) {
//       if ( options.layout === "check" ) {
//       //   return a.label( [
//       //     a.inlinefield( [ helpBody, field, hint ], options.inline.attributes )
//       //     a.inlinelabel( [ labelBody, helpButton ] ),
//       //   ], attributes );
//       //
//       //   return [ a.inline( field, options.inline.attributes ), a.label( [ labelBody, helpButton, hint, helpBody ], attributes ) ];
// // debugger
//         return a.label(
//           a.innerwrapper(
//             a.checklayout( [
//               a.leftwrapper( [ field ], options.leftwrapper ),
//               a.rightwrapper( x.appkit.lib.compactArray( [ labelBody, helpButton, hint, helpBody ] ), options.rightwrapper ),
//             ] ),
//             options.innerwrapper
//           ),
//           attributes
//         );
//
//       } else {
//       // var inlineOptions =  options.inline === true ? {} : options.inline || {}
//         return a.label(
//           a.innerwrapper(
//             [
//               a.leftwrapper( x.appkit.lib.compactArray( [ labelBody, helpButton ] ), options.leftwrapper ),
//               a.rightwrapper( x.appkit.lib.compactArray( [ helpBody, field, hint ] ), options.rightwrapper ),
//             ],
//             options.innerwrapper
//           ),
//           attributes
//         );
//
//       };
//     // } else {
//     //   if ( options.layout === "check" ) {
//     //     return a.label( [ [ field ], [ labelBody, helpButton, hint, helpBody ] ] ], attributes );
//     //   } else {
//     //     return a.label( [ [ labelBody, helpButton, helpBody , field, hint ] ], attributes );
//     //   };
//     // };
//
//   // };
//
// };
