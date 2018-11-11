AxFunction.Extensions.Plugins = {
  registered: [],
  register: function( name, definition, type ) { this.registered.push( [ name, definition, type ] ) },
  load: function( axFunction ) {
    this.registered.forEach( function( plugin ) {
      let name = plugin[0];
      let definition = plugin[1];
      let type = plugin[2];

      if ( type == "constructor" ) {
        definition = new definition( axFunction )
      } else if ( type == "class" ) {
        definition = definition.new( axFunction )
      }

      AxFunction.Extensions.prototype[ name ] = definition;
    } );
  },
};
