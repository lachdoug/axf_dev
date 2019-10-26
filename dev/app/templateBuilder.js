app.templateBuilder = ( template, params ) => {

  let x = ax.x

  try {
    return x.md( Mustache.render( template, params ) )
  } catch (e) {
    return e.message
  }

}
