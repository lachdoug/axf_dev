ax.extensions.form.helpbody = function( content ) {

  var a = ax.a;
  var x = this.axFunction.extensions;
  var f = this;

  // if ( content.$rawtext ) {
  //   x.md( content.$rawtext );
  // };

  // debugger

  return a.helpbody( content, { style: "display: none;" } );

};
