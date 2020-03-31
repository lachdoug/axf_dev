ax.extension.button = function( options = {} ) {

  let a = ax.a

  let handler = options.onclick || ( () => {} )

  let label = a['appkit-button-label']( options.label || '', { style: { pointerEvents: 'none' } } )

  let confirmation

  if ( ax.is.string( options.confirm ) ) {
    confirmation = () => confirm( options.confirm )
  } else if ( ax.is.function( options.confirm ) ) {
    confirmation = ( el ) => confirm( options.confirm( el ) )
  } else if ( options.confirm ) {
    confirmation = () => confirm( 'Are you sure?' )
  } else {
    confirmation = () => true
  }

  let buttonTag = {

    // id: options.id,
    // class: options.class,
    type: options.type || 'button',
    name: options.name,
    value: options.value,
    // disabled: options.disabled,
    // style: options.style,
    // title: options.title,

    ...options.buttonTag,

    $on: {
      'click: button onclick': function(e) {
        confirmation( this ) && handler.bind( this )( e, this, this.$state )
      },
      ...( options.buttonTag || {} ).$on,
    },


  }

  return a.button( label, buttonTag )

}
