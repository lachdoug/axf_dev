ax.extension.appkit.controller.$locate = function( locator ) {

  let scope = ( this.$options.mount || '' ) + ( this.$options.scope || '' )
  locator.root = ( locator.root || '' ) + scope
  locator.route = locator.route.replace( scope, '' )

  if ( locator.route === '' && this.$options.root ) {
    let pathname = window.location.pathname + this.$options.root
    history.pushState( { urlPath: pathname },"", pathname )
    locator.route = this.$options.root
  }

  // Get the content
  let view = this.$view( this, locator )
  // debugger


  view.content = this.$update( view, locator )

  // if ( ax.type.is.function( view.content ) ) {
  //   view.content = view.content( controller )
  // }

  // if ( locator.anchor ) {
  //   let anchorKeyName = options.anchor || "anchor"
  //   params[ anchorKeyName ] = locator.anchor
  // }

  // Call transition, if required, otherwise insert content
  if ( this.$options.transition ) {
    this.children[0].$to( view.content )
  } else {
    this.$nodes = view.content
  }

  if ( this.$slaves.length ) {
    // Object.assign ( locator.variables, view.variables )
    locator.variables = { ...locator.variables, ...view.variables }
    // iterate in reverse and remove orphan items
    for ( let i = this.$slaves.length - 1; i >= 0; i-- ) {
      if ( document.body.contains( this.$slaves[i] ) ) {
        this.$slaves[i].$locate( locator )
      } else {
        this.$slaves.splice( i, 1 )
      }
    }
  }



}
