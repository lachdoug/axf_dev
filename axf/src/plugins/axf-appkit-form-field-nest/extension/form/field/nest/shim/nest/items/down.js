ax.extension.form.field.nest.shim.nest.items.
down = function( f, options ) {

  return f.button( {
    label: '⏷',
    onclick: function (e,el) {
      var target = options.itemTarget ? options.itemTarget(el) : el.$('^|appkit-form-nest-item')
      var next = target.nextSibling
      var parent = target.parentElement
      if ( next ) {
        parent.insertBefore( target, next.nextSibling )
        this.$send( 'axf.appkit.form.nest.item.move' )
      }
    },
    ...options
  } )

}
