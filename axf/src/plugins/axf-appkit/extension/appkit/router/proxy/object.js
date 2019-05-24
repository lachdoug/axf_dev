ax.extension.appkit.router.proxy.
object = function( config ) {

  //
  // ax.log( {
  //   router: config.router,
  //   scope: config.scope
  // } )


  return {
    router: config.router,
    scope: config.scope || '',
    // matched: config.matched,
    params: config.params || {},
    path: config.path,
    query: config.query,
    anchor: config.anchor,
    default: config.default,
    transition: config.transition,

    ...ax.extension.appkit.router.factory,
  }
}
