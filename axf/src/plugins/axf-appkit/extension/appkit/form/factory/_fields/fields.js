ax.extension.appkit.form.factory.
fields = (f) => function( ...components ) {

  let options

  if ( ax.type.is.array( components[0] ) ) {
    // Components have been passed as an array.
    options = components[1] || {}
    components = components[0]
  } else {
    options = {}
  }

  return {
    $tag: "appkit-fields",
    $nodes: components.map( function( component ) {
      return f.field( component )
    } ),
    ...options.fieldsTag
  }

}
