App.prototype.body = function() {

  var a = this.a;
  var x = this.x;

  return x.controller( {
    "/": this.bodyRoot(a,x),
    "/get_ax": this.getAx(a,x),
    "/guide/:id": this.guideShow(a,x),
    "/guide/": this.guideShow(a,x),
    "/guide": this.guideIndex(a,x),
    "/dev": this.dev(a,x),
    "/*lost": function( params, controller ) { return a.p( "No view at /" + params.lost ); },
  }, { bind: "router", transition: x.appkit.transitions.fade } );

};
