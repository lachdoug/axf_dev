app.clients.client.edit.load.resolver = (r) => ( el, dataPromise ) => [
  dataPromise.then( ( data ) => {
    el.$nodes = () => app.clients.client.edit.form( r, data.client )
    // r.open( "<" )
  } ).catch( (error) => {
    ax.log( error )
    el.$text = "Failed to load client."
  } )
]
