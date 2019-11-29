cc.view.builder = function( viewSpec, params ) {

  return Object.values( viewSpec.components || {} ).map( ( componentSpec ) => {

    if ( componentSpec.type == 'template' ) {
      return cc.view.builder.template( componentSpec.template, params, params )
    } else if ( componentSpec.type == 'form' ) {
      return cc.view.builder.form( componentSpec.form, params, params )
    } else if ( componentSpec.type == 'report' ) {
      return cc.view.builder.report( componentSpec.report, params, params )
    } else {
      return null
    }

  } )

}
