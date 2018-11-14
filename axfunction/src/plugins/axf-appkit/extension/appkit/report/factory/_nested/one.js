ax.extension.appkit.report.factory.
one = (f) => function( name, component, options={} ) {

  let a = ax.a

  if ( typeof component === "function" ) {

    component = component(
      ax.extension.appkit.report.factory( {
        data: options.data || f.$data[ name ],
        nest: options.nest || f.$nest.concat( [ name ] ),
        layout: options.layout || f.$layout
      } )
    )

  }

  return a['appkit-report-field-one']( component )

}
