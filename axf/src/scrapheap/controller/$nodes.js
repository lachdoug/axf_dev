ax.extension.appkit.controller.$nodes = function ( options ) {

  if ( options.transition ) {

    let transition = options.transition

    if ( ax.type.is.string( transition ) ) {
      transition = ax.x.appkit.transition[ transition ]
    }

    return [ transition() ]

  } else {

    return []

  }

}
