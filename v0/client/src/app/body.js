App.prototype.body = function() {

  var a = this.a;
  var x = this.x;

  return x.controller( {
    "/": this.bodyRoot(a,x),
    "/get_ax": this.getAx(a,x),
    "/tutorials/:id": this.tutorialsShow(a,x),
    "/tutorials/": this.tutorialsShow(a,x),
    "/tutorials": this.tutorialsIndex(a,x),
    "/*lost": function( params, controller ) { return a.p( "No view at /" + params.lost ); },
  }, { bind: "router" } );

};
