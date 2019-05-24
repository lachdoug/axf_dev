app.clients.index.load.resolver = ( r, options={} ) => ( el, dataPromise ) => [
  dataPromise.then( ( data ) => {
    el.$nodes = () => app.clients.index.
      load.resolver[ ( options.as || "default" ) ]( r, data )
  } ).catch( (error) => {
    ax.log( error )
    el.$text = "Failed to load clients."
  } )
]
