app.formBuilder.component = ( f, componentSpec, params ) => {

  // return componentSpec

  if ( componentSpec.type == 'field' ) {
    return app.formBuilder.field( f, componentSpec.field, params )
  } else if ( componentSpec.type == 'fieldset' ) {
    return app.formBuilder.fieldset( f, componentSpec.fieldset, params )
  } else if ( componentSpec.type == 'row' ) {
    return app.formBuilder.row( f, componentSpec.row, params )
  } else if ( componentSpec.type == 'template' ) {
    return app.formBuilder.template( f, componentSpec.template, params )
  // } else if ( componentSpec.type == 'form' ) {
  //   return app.formBuilder.form( f, componentSpec.type, params )
  // } else if ( componentSpec.type == 'report' ) {
  //   return app.formBuilder.report( f, componentSpec.report, params )
  } else {
    return null
  }

}
