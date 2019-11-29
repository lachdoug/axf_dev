cc.view.builder.report.template = ( r, template, params ) => {

  let a = ax.a
  let x = ax.x

  try {
    return x.md( Mustache.render( template, { ...params, ...r.object } ) )
  } catch (e) {
    return a['p.error']( e.message )
  }

}
