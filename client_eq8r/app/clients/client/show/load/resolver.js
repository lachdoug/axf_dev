app.clients.client.show.load.resolver = (r) => ( el, dataPromise ) => [
  dataPromise.then( ( data ) => {
    el.$nodes = () => app.clients.client.show.client( r, data.client )
  } ).catch( (error) => {
    ax.log( error )
    el.$text = "Failed to load client."
  } )
]
