app.clients.client.delete.submit.resolver = (r) => ( el, dataPromise ) => [
  dataPromise.then( ( client ) => {
    el.$("^app-client").$text = "Deleted client."
    r.open( "<" )
  } ).catch( (error) => {
    ax.log( error )
    el.$("^app-client-delete").$text = "Failed to delete client."
  } )
]
