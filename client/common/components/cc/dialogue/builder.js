cc.dialogue.builder = function( components, params, options={} ) {

  return ( components || [] ).map( ( componentSpec ) => {

    if ( componentSpec.type == 'markdown' ) {
      return cc.dialogue.builder.markdown( componentSpec.markdown || {}, params )
    } else if ( componentSpec.type == 'form' ) {
      return cc.dialogue.builder.form( componentSpec.form || {}, params, options )
    } else if ( componentSpec.type == 'report' ) {
      return cc.dialogue.builder.report( componentSpec.report || {}, params, options )
    } else if ( componentSpec.type == 'output' ) {
      return cc.dialogue.builder.output( componentSpec.output || {}, params, options )
    } else if ( componentSpec.type == 'navigation' ) {
      return cc.dialogue.builder.navigation( componentSpec.navigation || {}, params, options )
    } else {
      return null
    }

  } )

}
