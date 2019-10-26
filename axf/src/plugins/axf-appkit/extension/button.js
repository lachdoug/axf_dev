ax.extension.button = function( options = {} ) {

  let a = ax.a

  let handler = options.onclick || ( () => {} )

  let label = options.label || '🌑'

  let buttonTag = {

    id: options.id,
    class: options.class,
    type: options.type || 'button',
    name: options.name,
    value: options.value,
    disabled: options.disabled,
    style: options.style,
    title: options.title,

    ...options.buttonTag,

    $on: {
      'click: button onclick': function(e) {
        handler.bind( this )( e, this, this.$state )
      },
      ...( options.buttonTag || {} ).$on,
    },


  }

  return a.button( label, buttonTag )

}
