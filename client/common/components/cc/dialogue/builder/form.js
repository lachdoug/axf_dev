cc.dialogue.builder.form = ( formSpec, params, options={} ) => (a,x) => {

  return cc.dialogue.builder.form.form( {
    // url: formSpec.url,
    action: options.action,
    components: Object.values( formSpec.components || {} ),
    object: params,
    params: params,
    cancel: formSpec.cancel,
    submit: formSpec.submit,
  } )

}
