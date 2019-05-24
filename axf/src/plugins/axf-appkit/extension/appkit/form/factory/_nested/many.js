ax.extension.appkit.form.factory.
many = (f) => function( key, component, options={} ) {

  let a = ax.a

  if ( ax.type.is.function( component ) ) {

    let data =
      options.data ||
      ( f.data && f.data[ options.key || key ] ) ||
      []
    let scope = options.scope || f.scope.concat( [ key, '' ] )
    let layout = options.layout || f.layout

    let factory = ax.extension.appkit.form.factory( {
      data: data,
      scope: scope,
      layout: layout
    } )
    factory.items = (ff) => ax.extension.appkit.form.factory.many.items( ff )
    factory.add = (ff) => ax.extension.appkit.form.factory.many.add( ff )

    component = component( factory )
    //
    // data.map( function( datum, i ) {
    //   let
    //   return a['appkit-form-field-many-item']( component( factory, i ) )
    // } )

  }

  return a['appkit-form-field-many']( component )

}
