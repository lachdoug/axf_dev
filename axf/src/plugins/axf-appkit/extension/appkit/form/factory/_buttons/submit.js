ax.extension.appkit.form.factory.
submit = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x

  let buttonTag = {
    $nodes: [
      options.icon ?
      x.appkit.icon( options.icon, options.text ) :
      ( options.text || 'Submit' )
    ],
    type: "submit",
    ...options.buttonTag
  }

  return a['appkit-form-submit']( a.button( buttonTag, {
    $focus: function() {
      this.focus()
    },
    $disable: function() {
      this.disabled = 'disabled'
    },
    $enable: function() {
      if ( !options.disabled ) this.removeAttribute('disabled')
    },
    ...options.submitTag
  } ) )

};
