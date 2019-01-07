ax.extension.appkit.report.factory.
many = (f) => function( name, component, options={} ) {

  let a = ax.a

  if ( ax.type.is.function( component ) ) {

    let data = options.data || f.$data[ options.key || name ] || []
    let scope = options.scope || f.$scope.concat( [ name, '' ] )
    let layout = options.layout || f.$layout

    let factory = ax.extension.appkit.report.factory( {
      data: data,
      scope: scope,
      layout: layout
    } )
    factory.items = (ff) => ax.extension.appkit.report.factory.many.items( ff )
    factory.add = (ff) => ax.extension.appkit.report.factory.many.add( ff )

    component = component( factory )
    //
    // data.map( function( datum, i ) {
    //   let
    //   return a['appkit-report-field-many-item']( component( factory, i ) )
    // } )

  }

  return a['appkit-report-field-many']( component )

}
