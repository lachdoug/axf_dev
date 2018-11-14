ax.extension.appkit.form.factory.
fields = (f) => function( ...components ) {

  return components.map( function( component ) {
    return f.field( component )
  } )

}
