App.prototype.guideShowFetchData = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( x.md( "Fetch data using the `.fetch()` extension." ) ),
    ] ),
    this.coderunner(
`ax( (a,x) => [
  x.fetch("/test/people")
] );`
    ),
  ];
};
