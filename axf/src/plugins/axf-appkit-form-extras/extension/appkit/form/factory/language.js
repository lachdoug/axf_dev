ax.extension.form.factory.
language = (f) => function( options={} ) {

  let a = ax.a
  let x = ax.x
  // let f = this
  let language = x.form.factory.language

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

      selections: language.selections,
    },
    options.select
  )

  return a['|appkit-form-language'](
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
      ...options.languageTag
    }
  )

}
