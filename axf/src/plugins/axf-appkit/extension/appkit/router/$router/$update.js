ax.extension.appkit.router.$router.$update = function () {

  let content = this.$views.match()
  let options = this.$config.options
  let locator = this.$locator

  let controller = this.$controller( locator )

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
      content = options.default.bind( this.$element )( controller )
    } else {
      content = options.default
    }
  } else if ( ax.type.is.function( content ) ) {
    content = content.bind( this.$element )( controller )
  }

  content = ax.a['appkit-this-view']( content, options.viewTag )

  // Call transition, if required, otherwise insert content
  if ( options.transition ) {
    this.$element.children[0].$to( content )
  } else {
    this.$element.$nodes = content
  }

  if ( this.$slaves.length ) {
    // Iterate in reverse and remove orphan items
    for ( let i = this.$slaves.length - 1; i >= 0; i-- ) {
      // debugger
      if ( document.body.contains( this.$slaves[i].$element ) ) {
        this.$slaves[i].$locate( { ...locator } )
      } else {
        this.$slaves.splice( i, 1 )
      }
    }
  }

}
