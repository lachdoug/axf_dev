ax.extension.appkit.form.factory.
fields = (f) => function( ...components ) {

  return {
      $tag: "fields",
      $nodes: components.map( function( component ) {
      return f.field( component )
    } )
  }

}
