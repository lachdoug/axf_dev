ax.extension.appkit.form.factory.field.
input = (f) => function( options ) {

  let a = ax.a
  let x = ax.x

  let as = options.as || 'input'
  let value

  if ( !ax.type.is.undefined( options.value ) ) {
    value = options.value
  } else if (
    ax.type.is.object( f.data ) &&
    !ax.type.is.undefined( f.data[ options.key ] )
  ) {
    value = f.data[ options.key ]
  }

  return a['appkit-form-field-input'](
    f[ as ]( {
      name: options.name,
      value: value,
      type: options.type,
      datatype: options.datatype,
      collection: options.collection,

      autocomplete: options.autocomplete,
      disabled: options.disabled,
      multiple: options.multiple,
      placeholder: options.placeholder,
      readonly: options.readonly,
      required: options.required,
      style: options.style,
      title: options.title,

      maxlength: options.maxlength,
      minlength: options.minlength,

      ...options[ as ],
    } ) )

}
