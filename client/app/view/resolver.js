app.view.resolver = (r) => ( el, dataPromise ) => [
  dataPromise.then( ( data ) => {
    el.$nodes = () => app.view.renderer( r, data )
  } ).catch( ( error ) => {
    ax.log( error )
    el.$text = `Failed to load. ${ error }`
  } )
]
