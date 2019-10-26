ax.extension.form.field.shim.
hint = function( options={} ) {

  let a = ax.a

  let hint = options.hint

  return hint ? a.small( a['|appkit-form-field-hint']( hint, options.hintTag ) ) : null

}
