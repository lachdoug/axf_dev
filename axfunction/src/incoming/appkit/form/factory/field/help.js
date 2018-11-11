ax.extensions.form.factory.field.help = function(
  help,
  options={}
) {

  let a = ax.a
  let x = ax.x

  let helpTag = Object.assign(
    {
      style: "display: none",
      $update: function() {
        if ( this._helpVisible ) {
          x.appkit.lib.fadeIn( this )
        } else {
          x.appkit.lib.fadeOut( this )
        }
      }
    },
    options.helpTag
  )

  // let buttonTag = Object.assign(
  //   { type: "button" },
  //   options.buttonTag
  // )

  // if ( typeof help === 'object' ) {
  //   return help
  // } else {
  //   // debugger
  //   return a.help( [
  //     x.btn( a( "? &#x25BE;" ), function() { this._toggle() }, { buttonTag: buttonTag } ),
    return a.help( help, helpTag )
    // ,
    // ], helpTag )
  // }

};

//
// return a.helpbutton( a.button(
//   "?",
//   {
//     type: "button",
//     onclick: function(e) {
//       debugger
//       var helpBody = e.target.closest("outerwrapper").querySelector("helpbody");
//       if ( helpBody.style.display === 'none' ) {
//         this.$html = "? &#x25BE;";
//         f.lib.fadeIn( helpBody );
//       } else {
//         this.$html = "?";
//         f.lib.fadeOut( helpBody );
//       };
//     },
//   }
// ) );
