ax.extension.appkit.report = function( component, options={} ) {

  if ( typeof component === "function" ) {

    let nest = options.nest || []
    if ( typeof nest === "string" ) { nest = [ nest ] }

    component = component(
      ax.extension.appkit.report.factory( {
        nest: nest,
        data: options.data,
        layout: options.layout
      } )
    )

  }

  return ax.a.report( component, options.reportTag )

}
