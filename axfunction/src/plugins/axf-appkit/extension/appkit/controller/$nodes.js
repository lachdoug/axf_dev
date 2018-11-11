ax.extension.appkit.controller.$nodes = function ( options ) {

  if ( options.transition ) {

    let transition = options.transition

    if ( typeof transition === "string" ) {
      transition = ax.x.appkit.transition[ transition ]
    }

    return [ transition() ]

  } else {

    return []

  }

}
