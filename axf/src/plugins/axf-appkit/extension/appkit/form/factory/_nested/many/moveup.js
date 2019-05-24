ax.extension.appkit.form.factory.many.
moveup = ( fi ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  return x.appkit.button( component || "⇡ Move up", function (e, el) {
    var target = el.$('^appkit-form-field-many-item')
    var previous = target.previousSibling
    var parent = target.parentElement
    previous && parent.insertBefore( target, previous )
  } )

}
