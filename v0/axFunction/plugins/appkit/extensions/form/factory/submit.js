ax.extensions.form.factory.submit = function(
  // options.components,
  options={}
) {

  let a = ax.a;

  let buttonTag = Object.assign(
    {
      $components: [
        options.icon ?
        a.icon( options.icon,
          { text: options.text } ) :
        a.text( options.text || 'Submit' )
      ],
      type: "submit"
    },
    options.buttonTag
  )

  return a.button( options.components, buttonTag );

};
