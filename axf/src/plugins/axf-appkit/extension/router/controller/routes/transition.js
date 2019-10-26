ax.extension.router.controller.routes.
transition = ( transition ) => {

  if( ax.is.string( transition ) ) {
    return ax.x.transition[ transition ]()
  } else if( ax.is.array( transition ) ) {
    let name = transition[0]
    let options = transition[1]
    return ax.x.transition[ name ]( options )
  } else {
    return transition
  }

}
