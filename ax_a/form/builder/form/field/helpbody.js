AxFunctionExtensionsFormBuilder.prototype.helpbody = function( content ) {

  var a = this.axFunction.tags;
  var x = this.axFunction.extensions;
  var f = this;

  // if ( content.$rawtext ) {
  //   x.md( content.$rawtext );
  // };

  // debugger

  return a.helpbody( content, { style: "display: none;" } );

};
