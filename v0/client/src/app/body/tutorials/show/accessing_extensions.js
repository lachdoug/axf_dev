App.prototype.tutorialsShowAccessingExtensions = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( "Pass a function as an argument." ),
    ] ),
    this.coderunner(
 `ax( (a,x) => [ x.form( (f) => [ f.field("name"), f.submit() ] ), a.h1("Big heading"), [ a.i("How are you?") ] ] );` ),
  ];
};
