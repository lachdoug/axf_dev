function appGetAx(a,x) {
  return a.getAx( [
    a.h2( "Get Ax" ),
    a.p( [
      a.span( "1. Visit the "),
      a.a( "Ax Github page", { href: "https://github.com/engines/Ax", target: "https://github.com/engines/Ax" } ),
      a.span(" and go to the /release directory." ),
    ] ),
    a.p( [
      "2. Use the CDN:",
      x.code(
        `<script src="http://somecdn.com/axframework-0.0.0/axf.min.js"></script>`
      ),
    ] ),
    a.p( [
      "3. Or use npm:",
      x.code(
        `npm axf`
      ),
    ] ),
    a.h4( "Get Ax" ),
  ] );
};
