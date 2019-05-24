ax.extension.appkit.form.factory.many.
movedown = ( fi ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  return x.appkit.button( component || "⇡ Move down", function (e, el) {
    var target = el.$('^appkit-form-field-many-item')
    var next = target.nextSibling
    var parent = target.parentElement
    next && parent.insertAfter( target, previous )
  } )

}
