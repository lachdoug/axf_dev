ax.extension.appkit.report.factory.
one = (f) => function( key, component, options={} ) {

  let a = ax.a

  if ( ax.type.is.function( component ) ) {

    component = component(
      ax.extension.appkit.report.factory( {
        data: options.data || f.$data[ key ],
        scope: options.scope || f.$scope.concat( [ key ] ),
        layout: options.layout || f.$layout
      } )
    )

  }

  return a['appkit-report-field-one']( component )

}
