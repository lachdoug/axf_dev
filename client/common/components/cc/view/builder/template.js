cc.view.builder.template = ( template, params ) => {

  try {
    return app.md( Mustache.render( template, params ) )
  } catch (e) {
    return e.message
  }

}
