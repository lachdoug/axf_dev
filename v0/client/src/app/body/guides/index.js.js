App.prototype.guidesIndex = function( params, controller ) {

  var a = this.a;
  var x = this.x;
  var app = this;

  return ( params, controller ) => {

    // var guides = appGuides.all;

    return a.ol( this.guides().all().map( function( guide ) {
      return a.li( app.appbtn(
        guide.label,
        function() { controller._open( "/guides/" + guide.id ) }
      ) )
    } ) );

  };
};
