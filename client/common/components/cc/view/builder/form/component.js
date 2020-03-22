cc.control.builder.form.component = ( f, componentSpec, params ) => {

  // return componentSpec

  if ( componentSpec.type == 'field' ) {
    return cc.control.builder.form.field( f, componentSpec.field, params )
  } else if ( componentSpec.type == 'fieldset' ) {
    return cc.control.builder.form.fieldset( f, componentSpec.fieldset, params )
  } else if ( componentSpec.type == 'row' ) {
    return cc.control.builder.form.row( f, componentSpec.row, params )
  } else if ( componentSpec.type == 'template' ) {
    return cc.control.builder.form.template( f, componentSpec.template, params )
  // } else if ( componentSpec.type == 'form' ) {
  //   return cc.control.builder.form.form( f, componentSpec.type, params )
  // } else if ( componentSpec.type == 'report' ) {
  //   return cc.control.builder.form.report( f, componentSpec.report, params )
  } else {
    return null
  }

}
