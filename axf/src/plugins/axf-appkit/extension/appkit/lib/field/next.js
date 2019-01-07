ax.extension.appkit.lib.field.next = function( field ) {

  let form = field.$('^form')
  let fields = Array.from( form.querySelectorAll( 'appkit-form-field, appkit-form-submit' ) )

  field = field.$('^appkit-form-field')
  let index = fields.indexOf( field )
  let count = fields.length

  if ( index == count - 1 || count < 2 ) {
    return field
  } else {
    return fields[ index + 1 ]
  }

}
