cc.control.builder = function( components, params ) {

  return ( components || [] ).map( ( componentSpec ) => {

    if ( componentSpec.type == 'template' ) {
      return cc.control.builder.template( componentSpec.template, params, params )
    } else if ( componentSpec.type == 'form' ) {
      return cc.control.builder.form( componentSpec.form, params, params )
    } else if ( componentSpec.type == 'report' ) {
      return cc.control.builder.report( componentSpec.report, params, params )
    } else {
      return null
    }

  } )

}
