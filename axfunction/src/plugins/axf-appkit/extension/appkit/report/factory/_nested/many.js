ax.extension.appkit.report.factory.
many = (f) => function( name, component, options={} ) {

  let a = ax.a

  if ( typeof component === "function" ) {

    let data = options.data || f.$data[ options.key || name ] || []
    let nest = options.nest || f.$nest.concat( [ name, '' ] )
    let layout = options.layout || f.$layout

    let factory = ax.extension.appkit.report.factory( {
      data: data,
      nest: nest,
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
