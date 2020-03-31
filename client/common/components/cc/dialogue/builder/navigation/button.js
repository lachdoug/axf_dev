cc.dialogue.builder.navigation.button = ( buttonSpec, params ) => {

  let button = {}

  if( buttonSpec.style === 'none' ) {
    button.style = ''
  } else if ( !buttonSpec.style ) {
    // Show default style
    button.style = 'navigation'
  }

  if ( buttonSpec.icon === 'none' ) {
    button.icon = ''
  } else if ( !buttonSpec.icon ) {
    // Show default icon
    button.icon = 'caret-right'
  } else {
    button.icon = buttonSpec.icon
  }

  let labelSpec = buttonSpec.label || {}

  if( labelSpec.display === 'none' ) {
    button.label = ''
  } else if ( labelSpec.display === 'custom' ) {
    button.label = Mustache.render( labelSpec.custom, params )
  } else {
    button.label = ax.x.lib.text.labelize( buttonSpec.dialogue || 'main' )
  }

  button.onclick = (e,el) => el.$send(
    'app-container-dialogue-navigation',
    { detail: { dialogue: buttonSpec.dialogue || 'main', params: params } }
  )

  return (a,x) => x.button(
    cc.dialogue.builder.navigation.button.options( button )
  )

}

cc.dialogue.builder.navigation.button.options = ( button ) => {

  if ( button === false ) return false

  let label

  if ( button.icon ) {
    label = app.icon(
      `fas fa-${ button.icon }`,
      button.label
    )
  } else {
    label = button.label
  }

  return {
    label: label,
    buttonTag: {
      class: `btn btn-${ button.style }`,
    },
    onclick: button.onclick,
  }

}
