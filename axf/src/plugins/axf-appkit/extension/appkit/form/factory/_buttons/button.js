ax.extension.appkit.form.factory.
button = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x

  let onclick = function (e, el, state) {
    let form = el.$("^form")
    if ( options.onclick ) {
      options.onclick.bind( this )( e, el, form, state )
    } else {
      ax.log( form.$data() )
      alert( "Form data has been logged to the console." )
    }
  }

  let buttonTag = {
    $nodes: [
      options.icon ?
      x.appkit.icon( options.icon, options.text ) :
      ( options.text || 'OK' )
    ],
    $on: { click: onclick },
    type: "button",
    id: options.id,
    class: options.class,
    ...options.buttonTag
  }

  return a['appkit-form-button']( a.button( buttonTag, {
    $focus: function() {
      this.focus()
    },
    $disable: function() {
      this.disabled = 'disabled'
    },
    $enable: function() {
      if ( !options.disabled ) this.removeAttribute('disabled')
    },
    ...options.formButtonTag
  } ) )

};
