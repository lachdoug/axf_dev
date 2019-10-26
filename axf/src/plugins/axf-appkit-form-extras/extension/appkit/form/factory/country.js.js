ax.extension.form.factory.country = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let country = x.form.factory.country

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
      placeholder: options.placeholder || 𝍣,
      required: options.required,
      style: options.style,
      title: options.title,

      selections: country.selections,
    },
    options.select
  )

  return a['|appkit-form-country'](
    f.select( selectOptions ),
    {
      $value: function() {
        return this.$('*').$value()
      },
      $data: function() {
        return this.$value()
      },
      $disable: function() {
        this.$('*').$disable()
      },
      $enable: function() {
        this.$('*').$enable()
      },
      $focus: function () {
        this.$('*').focus()
      },
      ...options.countryTag
    }
  )

}
