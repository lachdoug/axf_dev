AxFunction.Cellbase.Plugins = {
  registered: [],
  register: function( name, definition ) { this.registered.push( [ name, definition ] ) },
  load: function( axFunction ) {
    this.registered.forEach( function( plugin ) {
      let name = plugin[0];
      let definition = plugin[1];
      axFunction.cellbase[ name ] = definition;
    } );
  },
};
