app.btn = function( component, onclick, klass='primary', options={} ) {

  return (a,x) => x.appkit.button( component, onclick, {
    buttonTag: {
      disabled: options.disabled,
      class: `btn btn-${ klass }`,
      ...options.buttonTag
    }
  } )
}
