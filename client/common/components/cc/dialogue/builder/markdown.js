cc.dialogue.builder.markdown = ( markdown, params ) => {

  try {
    return app.md( Mustache.render( markdown.template || '', params ) )
  } catch (e) {
    return (a,x) => a['.error']( e.message )
  }

}
