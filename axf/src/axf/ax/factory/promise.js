ax.factory.promise = function ( component ) {

  let output = function( args ) {
    if ( args.length === 1 ) {
      args = args[0]
    }
    if ( ax.type.is.string( args ) ) {
      return args
    } else {
      return JSON.stringify( args, null, 2  )
    }
  }

  return this( {
    $init: (el) => {
      component.then(
        function( ...args ) { el.$text = output( args ) }
      ).catch(
        function( ...args ) { el.$text = output( args ) }
      )
    }
  } )

}
