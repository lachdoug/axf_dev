cc.view.builder.report.component = ( r, componentSpec, params ) => {

  if ( componentSpec.type == 'field' ) {
    return cc.view.builder.report.field( r, componentSpec.field, params )
  } else if ( componentSpec.type == 'fieldset' ) {
    return cc.view.builder.report.fieldset( r, componentSpec.fieldset, params )
  } else if ( componentSpec.type == 'row' ) {
    return cc.view.builder.report.row( r, componentSpec.row, params )
  } else if ( componentSpec.type == 'template' ) {
    return cc.view.builder.report.template( r, componentSpec.template, params )
  } else if ( componentSpec.type == 'form' ) {
    return cc.view.builder.report.form( r, componentSpec.form, params )
  } else {
    return null
  }

}
