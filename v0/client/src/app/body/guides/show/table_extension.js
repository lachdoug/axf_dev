App.prototype.guidesShowTableExtension = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( x.md( "Render tables using the `.table()` extension." ) ),
    ] ),
    this.coderunner(
`ax( (a,x) => [
  x.table(
    [
      [ "First", "Second", "" ],
      [ "click" , "on", "1" ],
      [ "each", "row", "2" ]
    ],
    {
      headers: { cols: [ 2 ], rows: [ 0 ] },
      trAttributes: function( i, row ) {
        return {
          onclick: function(e) {
            e.target.closest("table").parentElement.
              $components.push( a.div( i + "-" + row[0] + row[1] + " " ) );
          },
        };
      },
    }
  )
] );`
    ),
  ];
};
