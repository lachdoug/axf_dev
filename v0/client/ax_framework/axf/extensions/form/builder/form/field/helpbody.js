AxFrameworkExtensionsFormBuilder.prototype.helpbody = function( content ) {

  var a = this.axFramework.tags;
  var x = this.axFramework.extensions;
  var f = this;

  if ( content.$rawtext ) {
    x.md( content.$rawtext );
  };

  return a.helpbody( content, { style: "display: none;" } );

};
