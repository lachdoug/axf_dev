ax.extension.form.field.shim.field.collection.
add = function( f, options ) {

  let label = `✚ Add${ options.item ? ` ${ options.item }`: '' }`

  return f.button( {
    label: label,
    onclick: (e,el) => {
      let itemsTag = options.target ? options.target(el) : el.$('^|appkit-form-collection |appkit-form-collection-items')
      itemsTag.$add()
      itemsTag.$send( 'axf.appkit.form.collection.item.add' )
    },
    ...options
  } )

}
