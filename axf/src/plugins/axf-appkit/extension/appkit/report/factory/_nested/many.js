ax.extension.appkit.report.factory.
many = (r) => function( name, component, options={} ) {

  let a = ax.a

  if ( ax.type.is.function( component ) ) {

    let data = options.data || r.data[ options.key || name ] || []
    let scope = options.scope || r.scope.concat( [ name, '' ] )
    let layout = options.layout || r.layout

    let factory = ax.extension.appkit.report.factory( {
      data: data,
      scope: scope,
      layout: layout
    } )
    factory.items = (rr) => ax.extension.appkit.report.factory.many.items( rr )
    factory.add = (rr) => ax.extension.appkit.report.factory.many.add( rr )

    component = component( factory )
    //
    // data.map( function( datum, i ) {
    //   let
    //   return a['appkit-report-field-many-item']( component( factory, i ) )
    // } )

  }

  return a['appkit-report-field-many']( component )

}
