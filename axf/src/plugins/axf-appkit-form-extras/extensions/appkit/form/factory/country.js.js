ax.extension.appkit.form.factory.country = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let country = x.appkit.form.factory.country

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

      collection: country.collection,
    },
    options.select
  )

  return a['appkit-form-country'](
    f.select( selectOptions ),
    {
      $value: function() {
        return this.$('select').$value()
      },
      $disable: function() {
        this.$('select').$disable()
      },
      $enable: function() {
        this.$('select').$enable()
      },
      $focus: function () {
        this.$('select').focus()
      },
      ...options.countryTag
    }
  )

}
