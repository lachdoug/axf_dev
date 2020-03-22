cc.control.builder.report.form = ( r, formSpec, params ) => {

  return cc.control.builder.form.form( {
    components: Object.values( formSpec.components || {} ),
    object: r.object,
    params: params,
    cancel: false,
    submit: formSpec.submit,
  } )

}
