ax.extension.appkit.form.factory.
submit = (f) => function(
  // options.components,
  options={}
) {
// debugger

  let a = ax.a

  let buttonTag = {
    $nodes: [
      options.icon ?
      ax.a.icon( options.icon,{ text: options.text } ) :
      ( options.text || 'Submit' )
    ],
    type: "submit",
    ...options.buttonTag
  }

  return a['appkit-form-submit']( a.button( buttonTag ), {
    $focus: function() {
      this.focus()
    },
    ...options.submitTag
  } )

};
