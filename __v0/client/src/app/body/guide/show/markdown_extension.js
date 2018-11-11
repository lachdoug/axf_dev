App.prototype.guideShowMarkdownExtension = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( x.md( "Use the `.markdown()` extension to create HTML from markdown text." ) ),
    a.p( x.md( "`.md()` is a convenience alias for `.markdown()`." ) ),
    this.coderunner( `ax( (a,x) => x.md( "Some **markdown** text." ) );` ),
  ];
};
