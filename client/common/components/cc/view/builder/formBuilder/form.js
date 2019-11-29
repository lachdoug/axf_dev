cc.view.builder.form.form = ( options={} ) => (a,x) => {

  let components = (f) => ( options.components || [] ).map(
    ( componentSpec ) => cc.view.builder.form.component( f, componentSpec, options.params )
  )

  let formFn = (f) => [
    ...components(f),
    a.p(
      f.buttons( {
        cancel: { buttonTag: { data: { dismiss: 'modal' } } } }
      )
    ),
  ]

  return cc.form( {
    url: options.url,
    form: formFn,
    params: options.params,
    object: options.object,
    scope: options.scope,
  } )

}
