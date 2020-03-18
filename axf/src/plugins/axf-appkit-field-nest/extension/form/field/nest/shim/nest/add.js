ax.extension.form.field.nest.shim.nest.
add = function( f, options ) {

  let label = `✚ Add${ f.item ? ` ${ f.item }`: '' }`

  return f.button( {
    label: label,
    onclick: (e,el) => {
      let itemsTag = options.target ? options.target(el) : el.$('^|appkit-form-nest |appkit-form-nest-items')
      itemsTag.$add()
      itemsTag.$send( 'axf.appkit.form.nest.item.add' )
    },
    ...options
  } )

}
