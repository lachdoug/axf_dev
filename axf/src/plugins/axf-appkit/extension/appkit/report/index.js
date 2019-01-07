ax.extension.appkit.report.item.index = function( component, options={} ) {

  let before = options.before
  let after = options.after

  if ( ax.type.is.function( before ) ) {
    before = before( {
      data
    } )
  }

  // if ( ax.type.is.function( component ) ) {
  //
  //   let scope = options.scope || []
  //   if ( ax.type.is.string( scope ) ) { scope = [ scope ] }
  //
  //   component = component(
  //     ax.extension.appkit.report.factory( {
  //       scope: scope,
  //       data: options.data,
  //       layout: options.layout
  //     } )
  //   )
  //
  // }
  //
  // return ax.a['appkit-report-index']( component, options.indexTag )

}
