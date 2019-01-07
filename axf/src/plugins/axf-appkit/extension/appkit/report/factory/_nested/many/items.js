ax.extension.appkit.report.factory.many.
items = ( f ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x


  if ( ax.type.is.function( component ) ) {

    let data = options.data || f.$data
    let scope = options.scope || f.$scope
    let layout = options.layout || f.$layout
    let template = component

    component = data.map( function( datum, i ) {
      let factory = ax.extension.appkit.report.factory( {
        data: datum,
        scope: scope,
        layout: layout
      } )
      factory.remove = (f) => ax.extension.appkit.report.factory.many.remove( f )

      return a['appkit-report-field-many-item']( component( factory, i ) )
    } )

    return a['appkit-report-field-many-items']( component, {
      $add: function( addOptions ) {

        let data = ( options.new && options.new() ) || {}

        let factory = ax.extension.appkit.report.factory( {
          data: data,
          scope: scope,
          layout: layout
        } )
        factory.remove = (f) => ax.extension.appkit.report.factory.many.remove( f )

        let item = a['appkit-report-field-many-item']( template( factory, null ) )

        this[ addOptions.insert || 'append' ]( item )

      },
    } )

  } else {

    return a['appkit-report-field-items']( component )

  }


}
