ax.extension.appkit.form.factory.field.
input = (f) => function( options ) {

  let a = ax.a
  let x = ax.x

  let as = options.as || 'input'
  let value = ( f.$data && f.$data[ options.key ] ) || options.value

  return a['appkit-form-field-input'](
    f[ as ]( {
      name: options.name,
      value: value,
      type: options.type,
      collection: options.collection,

      autocomplete: options.autocomplete,
      disabled: options.disabled,
      multiple: options.multiple,
      placeholder: options.placeholder,
      readonly: options.readonly,
      required: options.required,
      style: options.style,
      title: options.title,


      ...options[ as ],
    } ) )

}
