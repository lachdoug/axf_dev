ax.extension.form.field.shim.field.collection.
down = function( f, options ) {

  return f.button( {
    label: '⏷',
    onclick: function (e,el) {
      var target = options.itemTarget ? options.itemTarget(el) : el.$('^|appkit-form-collecion-item')
      var next = target.nextSibling
      var parent = target.parentElement
      if ( next ) {
        parent.insertBefore( target, next.nextSibling )
        this.$send( 'axf.appkit.form.collecion.item.move' )
      }
    },
    ...options
  } )

}
