cc.view.builder.report.form = ( r, formSpec, params ) => {

  return cc.view.builder.form.form( {
    components: Object.values( formSpec.components || {} ),
    scope: r.scope,
    object: r.object,
    params: params,
  } )

}
