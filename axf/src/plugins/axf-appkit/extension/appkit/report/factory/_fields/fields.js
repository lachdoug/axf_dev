ax.extension.appkit.report.factory.
fields = (r) => function( ...components ) {

  return ax.a['appkit-report-fields']( components.map( function( component ) {
    return r.field( component )
  } ) )

}
