cc.view.builder.form.template = ( f, template, params ) => {

  let a = ax.a
  let x = ax.x

  try {
    return app.md( Mustache.render( template, { ...params, ...f.object } ) )
  } catch (e) {
    return a['p.error']( e.message )
  }

}
