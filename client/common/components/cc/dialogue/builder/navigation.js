cc.dialogue.builder.navigation = ( navigationSpec, params ) => {

  let components = Object.values( navigationSpec.components || {} )

  return ( components || [] ).map( ( componentSpec ) => {

    if ( componentSpec.type == 'menu' ) {
      return cc.dialogue.builder.navigation.menu( componentSpec.menu || {}, params )
    } else if ( componentSpec.type == 'button' ) {
      return cc.dialogue.builder.navigation.button( componentSpec.button || {}, params )
    } else {
      return componentSpec
    }

  } )

}
