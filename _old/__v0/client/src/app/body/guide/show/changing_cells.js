App.prototype.guideShowChangingCells = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return this.coderunner(
`ax( (a) => [
  [ "Type something below" ],
  a.input( null, { onkeyup: function() { this.previousSibling.$text = this.value } } )
] );`
  );
};
