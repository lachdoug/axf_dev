ax.extension.appkit.form.factory.
submit = (f) => function(
  // options.components,
  options={}
) {
// debugger
  let buttonTag = Object.assign(
    {
      $nodes: [
        options.icon ?
        ax.a.icon( options.icon,{ text: options.text } ) :
        ( options.text || 'Submit' )
      ],
      type: "submit"
    },
    options.buttonTag
  )

  return ax.a.button( buttonTag );

};
