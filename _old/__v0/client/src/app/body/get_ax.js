App.prototype.getAx = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return ( params, controller ) => [
    a.h2( "Get Ax" ),
    a.p( [
      a.span( "1. Visit the "),
      a.a( "Ax Github page", { href: "https://github.com/engines/Ax", target: "https://github.com/engines/Ax" } ),
      a.span(" and go to the /release directory." ),
    ] ),
    a.p( [
      "2. Use the CDN:",
      x.code(
        `<script src="http://somecdn.com/axfunction-0.0.0/axf.min.js"></script>`
      ),
    ] ),
    a.p( [
      "3. Or use npm:",
      x.code(
        `npm i axf`
      ),
    ] ),
    a.hr(),
    a.p( x.md( "To run `ax()` from a file." ) ),
    x.code(
`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="http://localhost:3333/vendor/celljs-0.0.0.js"></script>
  <script src="http://localhost:3333/axf.js" ></script>
</head>
<body>
  <script>ax( "Hello world" );</script>
</body>
</html>`, { mode: "text/html" }
    ),

  ];
};
