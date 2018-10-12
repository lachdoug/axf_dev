ax.tagProxy.Shim = {
  get: ( target, property ) => function() {

    let components = arguments[0]
    let attributes = arguments[1]

// if ( property === 'selectinput' ) debugger

    if ( attributes ) { attributes.$type = attributes.$type || property }
    else { attributes = { $type: property } }

    return ax.factory( components, attributes )

  }
}
