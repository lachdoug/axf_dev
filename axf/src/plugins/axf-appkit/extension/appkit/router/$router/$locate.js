ax.extension.appkit.router.$router.$locate = function( locator ) {

  let options = this.$config.options
  let scope = options.scope || ''
  locator.scope = ( locator.scope || '' ) + scope
  locator.route = locator.route.replace( scope, '' )

  if ( locator.route === '' && options.root ) {
    let pathname = window.location.pathname + options.root
    history.pushState( { urlPath: pathname },"", pathname )
    locator.route = options.root
  }

  this.$locator = locator

  this.$update()

}
