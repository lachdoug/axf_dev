ax.extension.appkit.report.factory.many.
items = ( f ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x


  if ( typeof component === "function" ) {

    let data = options.data || f.$data
    let nest = options.nest || f.$nest
    let layout = options.layout || f.$layout
    let template = component

    component = data.map( function( datum, i ) {
      let factory = ax.extension.appkit.report.factory( {
        data: datum,
        nest: nest,
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
          nest: nest,
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
