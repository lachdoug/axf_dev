cc.dialogue.builder.report.component = ( r, componentSpec, params ) => {

  if ( componentSpec.type == 'field' ) {
    return cc.dialogue.builder.report.field( r, componentSpec.field, params )
  } else if ( componentSpec.type == 'fieldset' ) {
    return cc.dialogue.builder.report.fieldset( r, componentSpec.fieldset, params )
  } else if ( componentSpec.type == 'row' ) {
    return cc.dialogue.builder.report.row( r, componentSpec.row, params )
  } else if ( componentSpec.type == 'template' ) {
    return cc.dialogue.builder.report.template( r, componentSpec.template, params )
  } else if ( componentSpec.type == 'form' ) {
    return cc.dialogue.builder.report.form( r, componentSpec.form, params )
  } else {
    return null
  }

}
