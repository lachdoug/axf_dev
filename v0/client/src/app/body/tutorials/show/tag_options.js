App.prototype.tutorialsShowTagOptions = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( "The second argument is for options." ),
    ] ),
    this.coderunner(
`ax("Hello world", { style: "color: red;" });` ),
  ];
};
