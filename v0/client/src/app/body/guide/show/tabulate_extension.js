App.prototype.guideShowTabulateExtension = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( x.md( "Render tables using the `.table()` extension." ) ),
    ] ),
    this.coderunner(
`ax( (a,x) => [
  x.table(
    [ { first: a.h1("hi"), second: "ho" }, { first: "fizz", second: "buzz" }, [a.h1("a"), "b", "c"] ],
    {
      properties: [ "first", "second" ],
      labels: { first: a.h1("Cool") },
      trTag: function( row, i ){
        return { onclick: function() { alert(i) } };
      },
      thTag: {}
    }
  )
] );`
    ),
  ];
};
