ax.extension.appkit.controller.$update = function ( view, locator ) {

  let content = view.content
  let options = this.$options

  let params = { anchor: locator.anchor, ...locator.variables, ...view.variables, ...locator.search }
  let control = {
    element: this,
    params: params,
    locator: locator,
    open: this.$open.bind( this ),
  }

  // debugger
  if ( ax.type.is.undefined( content ) ) {
    if ( ax.type.is.undefined( options.default ) ) {
      let message = `Not found: "${ window.location.pathname }"`
      if ( options.lost === "show" ) {
        content = message
      } else if ( options.lost === "warn" ) {
        ax.warn( message )
        content = ''
      } else if ( options.lost === "throw" ) {
        ax.throw( message )
      } else {
        content = ''
      }
    } else if ( ax.type.is.function( options.default ) ) {
      // debugger
      content = options.default( control )
    } else {
      content = options.default
    }
  } else if ( ax.type.is.function( content ) ) {
    // debugger
    content = content( control )
  }

  // let viewTag = options.viewTag
  //
  // if ( ax.type.is.function( viewTag ) ) {
  //   viewTag = viewTag( route, params )
  // }

  return ax.a['appkit-controller-view']( content, options.viewTag )



}
