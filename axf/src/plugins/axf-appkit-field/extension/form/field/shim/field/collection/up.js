ax.extension.form.field.shim.field.collection.
up = function( f, options ) {

  return f.button( {
    label: '⏶',
    onclick: function (e,el) {
      var target = options.itemTarget ? options.itemTarget(el) : el.$('^|appkit-form-collection-item')
      var previous = target.previousSibling
      var parent = target.parentElement
      if ( previous ) {
        parent.insertBefore( target, previous )
        this.$send( 'axf.appkit.form.collection.item.move' )
      }
    },
    ...options
  } )

}
