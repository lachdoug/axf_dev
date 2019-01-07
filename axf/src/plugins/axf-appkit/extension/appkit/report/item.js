ax.extension.appkit.report.item = function( component, options={} ) {

  if ( ax.type.is.function( component ) ) {

    let scope = options.scope || []
    if ( ax.type.is.string( scope ) ) { scope = [ scope ] }

    component = component(
      ax.extension.appkit.report.factory( {
        scope: scope,
        data: options.data,
        layout: options.layout
      } )
    )

  }

  return ax.a['appkit-report-item']( component, options.itemTag )

}
