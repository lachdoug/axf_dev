ax.extension.appkit.form.factory.country = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let form = x.appkit.form

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

      collection: form.factory.country.collection,
    },
    options.select
  )

  return f.select( selectOptions )

}
