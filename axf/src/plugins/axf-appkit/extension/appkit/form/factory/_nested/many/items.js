ax.extension.appkit.form.factory.many.
items = ( f ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  if ( ax.type.is.function( component ) ) {

    let data = options.data || f.data
    let scope = options.scope || f.scope
    let layout = options.layout || f.layout
    let template = component

    component = data.map( function( datum, i ) {

      let fi = ax.extension.appkit.form.factory.many.items.factory(f, data, scope, layout )

      return a['appkit-form-field-many-item']( component( fi, i ) )
    } )

    return a['appkit-form-field-many-items']( component, {
      $add: function( addOptions ) {

        let data = ( options.new && options.new() ) || {}

        let fi = ax.extension.appkit.form.factory.many.items.factory(f, data, scope, layout )

        let item = a['appkit-form-field-many-item']( template( fi, null ) )

        this[ addOptions.insert || 'append' ]( item )

      },
    } )

  } else {

    return a['appkit-form-field-items']( component )

  }


}
