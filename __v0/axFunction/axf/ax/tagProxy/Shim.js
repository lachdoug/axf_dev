ax.tagProxy.Shim = {
  get: ( target, property ) => function() {

    let components = arguments[0]
    let attributes = arguments[1]

    let seed

    // if the property starts with '.', give the tag a class
    // if the property starts with '#', give the tag an id
    // otherwise give the tag a $type
    switch( property[0] ) {
      case '.': seed = { class: property.substring( 1 ) }; break
      case '#': seed = { id: property.substring( 1 ) }; break
      default:  seed = { $type: property }
    }

    attributes = Object.assign( seed, attributes )

    return ax.factory( components, attributes )

  }
}
