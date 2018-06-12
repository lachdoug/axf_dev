App.prototype.tutorialsIndex = function( params, controller ) {

  var a = this.a;
  var x = this.x;

  return ( params, controller ) => {

    // var tutorials = appTutorials.all;

    return a.ol( this.tutorials().all().map( function( tutorial ) {
      return a.li( x.btn(
        tutorial.label,
        function() { controller._open( "/tutorials/" + tutorial.id ) }
      ) )
    } ) );

  };
};
