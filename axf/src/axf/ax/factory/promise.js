ax.factory.promise = function ( component ) {

  return this.element( {
    $init: (el) => {
      component.then(
        function( ...args ) { el.$nodes = ax.factory( args ) }
      ).catch(
        function( ...args ) { el.$nodes = ax.factory( args ) }
      )
    }
  } )

}
