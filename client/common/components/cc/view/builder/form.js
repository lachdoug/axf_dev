cc.control.builder.form = ( formSpec, params ) => (a,x) => {

  return cc.control.builder.form.form( {
    url: formSpec.url,
    components: Object.values( formSpec.components || {} ),
    object: params,
    params: params,
    cancel: formSpec.cancel,
    submit: formSpec.submit,
  } )

}
