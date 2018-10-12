App.prototype.guideIndex = function( params, controller ) {

  var a = this.a;
  var x = this.x;
  var app = this;

  return ( params, controller ) => {

    // var guide = appGuide.all;

    return a.ol( this.guide().all().map( function( guide ) {
      return a.li( app.appbtn(
        guide.label,
        function() { controller.$open( "/guide/" + guide.id ) }
      ) )
    } ) );

  };
};
