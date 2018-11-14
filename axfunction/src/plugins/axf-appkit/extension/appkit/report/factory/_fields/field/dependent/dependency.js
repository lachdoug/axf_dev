ax.extension.appkit.report.factory.field.
dependent.dependency = function( options ) {

  let selector = options.selector ||
    `[name='${options.name}']`

  let field = this.$('^report').$( selector )

  if ( field ) {
    return field.$('^appkit-report-field-dependent')
  } else {
    ax.throw( `Failed to find dependent field with selector: ${ JSON.stringify( selector ) }` )
  }

}
