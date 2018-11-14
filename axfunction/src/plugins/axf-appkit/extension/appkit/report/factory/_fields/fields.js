ax.extension.appkit.report.factory.
fields = (r) => function( ...components ) {

  return components.map( function( component ) {
    return r.field( component )
  } )

}
