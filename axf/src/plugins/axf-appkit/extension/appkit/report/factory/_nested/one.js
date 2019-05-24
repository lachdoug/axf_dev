ax.extension.appkit.report.factory.
one = (r) => function( key, component, options={} ) {

  let a = ax.a

  if ( ax.type.is.function( component ) ) {

    component = component(
      ax.extension.appkit.report.factory( {
        data: options.data || r.data[ key ],
        scope: options.scope || r.scope.concat( [ key ] ),
        layout: options.layout || r.layout
      } )
    )

  }
// debugger
  return a['appkit-report-field-one']( component )

}
