ax.extension.appkit.form.factory.field.
dependent.dependency = function( options ) {

  let selector = options.selector ||
    `[name='${options.name}']`

  let field = this.$('^form').$( selector )

  if ( field ) {
    return field.$('^appkit-form-field-dependent')
  } else {
    ax.throw( `Failed to find dependent field with selector: ${ JSON.stringify( selector ) }` )
  }

}
