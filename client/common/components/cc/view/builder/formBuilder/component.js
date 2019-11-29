cc.view.builder.form.component = ( f, componentSpec, params ) => {

  // return componentSpec

  if ( componentSpec.type == 'field' ) {
    return cc.view.builder.form.field( f, componentSpec.field, params )
  } else if ( componentSpec.type == 'fieldset' ) {
    return cc.view.builder.form.fieldset( f, componentSpec.fieldset, params )
  } else if ( componentSpec.type == 'row' ) {
    return cc.view.builder.form.row( f, componentSpec.row, params )
  } else if ( componentSpec.type == 'template' ) {
    return cc.view.builder.form.template( f, componentSpec.template, params )
  // } else if ( componentSpec.type == 'form' ) {
  //   return cc.view.builder.form.form( f, componentSpec.type, params )
  // } else if ( componentSpec.type == 'report' ) {
  //   return cc.view.builder.form.report( f, componentSpec.report, params )
  } else {
    return null
  }

}
