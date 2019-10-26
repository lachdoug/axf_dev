app.btn = function( label, onclick, options={} ) {

  let klass = options.class || 'btn app-btn'

  return (a,x) => x.appkit.button( {
    label: label,
    onclick: onclick,
    buttonTag: {
      disabled: options.disabled,
      class: klass,
      ...options.buttonTag
    }
  } )
}

app.link = function( component, href, options={} ) {

  let klass = options.class || 'btn app-btn'

  return (a,x) => a.a( component, {
    href: href,
    disabled: options.disabled,
    target: options.target,
    class: klass,
    ...options.aTag
  } )
}
