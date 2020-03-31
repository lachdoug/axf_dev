cc.dialogue.builder.form.template = ( f, template, params ) => {

  let a = ax.a
  let x = ax.x

  let component

  try {
    component = app.md( Mustache.render( template, { ...params, ...f.object } ) )
  } catch (e) {
    component = a['p.error']( e.message )
  }

  return a['app-interface-template']( component, { class: 'd-block p-2' } )

}
