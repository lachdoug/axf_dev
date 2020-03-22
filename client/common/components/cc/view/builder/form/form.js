cc.control.builder.form.form = ( options={} ) => (a,x) => {

  let components = (f) => ( options.components || [] ).map(
    ( componentSpec ) => cc.control.builder.form.component( f, componentSpec, options.params )
  )

  let cancelOptions = options.cancel || {}
  let submitOptions = options.submit || {}

  let cancelButtonOptions = cancelOptions.hide ?
  false :
  {
    onclick: undefined,
    buttonTag: { data: { dismiss: 'modal' } }
  }

  let submitButtonOptions = submitOptions.hide ?
  false :
  {
    // onclick: undefined,
    // buttonTag: { data: { dismiss: 'modal' } }
  }

  let formFn = (f) => [
    ...components(f),
    a.p(
      f.buttons( {
        cancel: cancelButtonOptions,
        submit: submitButtonOptions,
      } )
    ),
  ]

  return app.form( {
    url: options.url,
    form: formFn,
    params: options.params,
    object: options.object,
    scope: options.scope,
  } )

}
