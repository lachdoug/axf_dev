ax.extension.appkit.form.factory.many.
add = ( f ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  return x.appkit.button( component || "➕ Add", function () {
    this.$('^appkit-form-field-many appkit-form-field-many-items').$add( options )
  } )

}
