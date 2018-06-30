App.prototype.guidesShowReportExtension = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return [
    a.p( [
      a.p( x.md( "Render reports using the `.report()` extension." ) ),
    ] ),
    this.coderunner(
`ax( (a,x) =>
  x.report(
    (r) => [
      r.property( "first" ),
      r.property( "second", "image", { imgAttributes: { height: "20px" } } ),
      a.label( "third" ),
      r.property( "second", { dependent: { selector: "[name='hi']", pattern: /hi/ } } )
  	],
    { first: "hi", second: "/ax_logo.png" },
    // [ { first: "hi", second: "ho" }, { first: "fizz", second: "buzz" } ],
    {
      // properties: [ "first", "second" ],
      // labels: { first: a.h1("Cool") },
      // trAttributes: function( row, i ){
      //   return { onclick: function() { alert(i) } };
      // },
      // thAttributes: {}
    }
  )
);`
    ),
  ];
};
