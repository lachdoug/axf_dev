ax.extension.appkit.form.factory.
language = (f) => function( options={} ) {

  let a = ax.a
  let x = ax.x
  // let f = this
  let language = x.appkit.form.factory.language

  var selectOptions = Object.assign(
    {
      name: options.name,
      value: options.value,

      class: options.class,
      data: options.data,
      disabled: options.disabled,
      readonly: options.readonly,
      id: options.id,
      multiple: options.multiple,
      required: options.required,
      style: options.style,
      title: options.title,

      collection: language.collection,
    },
    options.select
  )

  return f.select( selectOptions )

}
