App.prototype.guideShowArrayAsArgument = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( "Pass an array." ),
    this.coderunner(
 `ax( [ "Hello", " ",  "world" ] );` ),
  ];
};
