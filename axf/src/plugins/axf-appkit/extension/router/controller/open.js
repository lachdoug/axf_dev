ax.extension.router.controller.
open = (config) => function( locator=null, query={}, anchor=null ) {

  let match
  let target
  let load
  let path


  // Reload current location when no locator provided.
  if ( locator == null ) {

    let currentLocation = config.router[0].$location()

    path = currentLocation.path
    query = currentLocation.query
    anchor = currentLocation.anchor

    target = config.router[0]

  } else {

    // ! prefix indicates that router should load rather than open.
    // Load changes content, but not the window address.
    // Open changes content and address.
    if ( locator[0] == '!' ) {
      load = true
      locator = locator.slice(1)
    }


    if ( locator[0] == '/' ) {

      path = locator
      target = config.router[0]

    // } else if ( match = locator.match( /^(>+)(.*)/) ) {
    //
    //   let forward = match[1].length
    //   path = match[2]
    //   target = config.router[ forward ]
    //
    // } else if ( match = locator.match( /^(<+)(.*)/) ) {
    //
    //   let backward = match[1].length
    //   path = match[2]
    //   target = config.router[ config.router.length - backward - 1 ]
    //
    // } else if ( locator[0] == '%' ) {
    //
    //   path = this.scope + locator.slice(1)
    //   target = config.router[0]
    //
    } else {

      path = this.path + locator
      target = config.router[0]

    }

  }

  if ( load ) {
    target.$load( path, query, anchor )
  } else {
    target.$open( path, query, anchor )
  }

}
