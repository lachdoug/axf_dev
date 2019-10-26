app.viewBuilder = function( viewSpec, params ) {
// debugger
  return Object.values( viewSpec.components || {} ).map( ( componentSpec ) => {

    if ( componentSpec.type == 'template' ) {
      return app.templateBuilder( componentSpec.template, params )
    } else if ( componentSpec.type == 'form' ) {
      return app.formBuilder( componentSpec.form, params )
    } else if ( componentSpec.type == 'report' ) {
      return app.reportBuilder( componentSpec.report, params )
    } else {
      return null
    }

  } )

}
