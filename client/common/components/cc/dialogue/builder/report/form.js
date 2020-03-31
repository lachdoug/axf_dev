cc.dialogue.builder.report.form = ( r, formSpec, params ) => {

  return cc.dialogue.builder.form.form( {
    components: Object.values( formSpec.components || {} ),
    object: r.object,
    params: { ...params, ...r.object },
    cancel: false,
    submit: formSpec.submit,
  } )

}
