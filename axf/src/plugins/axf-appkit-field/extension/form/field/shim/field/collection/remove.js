ax.extension.form.field.shim.field.collection.
remove = function( f, options ) {

  let item = options.item || 'item'
  let confirmation

  if ( ax.is.false( options.confirm ) ) {
    confirmation = false
  } else if ( ax.is.string( options.confirm ) || ax.is.function( options.confirm ) ) {
    confirmation = options.confirm
  } else {
    confirmation = `Are you sure that you want to remove this ${ item }?`
  }

  return f.button( {
    label: '✖',
    confirm: confirmation,
    onclick: function (e,el) {
      var target = el.$('^|appkit-form-collection-item')
      let parent = target.parentElement
      let index = Array.prototype.indexOf.call( parent.children, target )
      target.remove()
      let length = parent.children.length
      parent.$send( 'axf.appkit.form.collection.item.remove', { detail: {
        target: el,
        index: index,
        length: length,
      } } )
    },
    ...options
  } )

}
