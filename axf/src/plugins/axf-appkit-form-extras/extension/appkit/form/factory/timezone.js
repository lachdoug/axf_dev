// options - goes to f.select with selections added

ax.extension.form.factory.timezone = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  // let f = this
  let timezone = ax.extension.form.factory.timezone

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

      selections: timezone.selections,
    },
    options.select
    //   placeholder: options.placeholder,
    //   // required: options.required,
    //   // disabled: options.disabled,
    //   selectTag: options.selectTag || {},
    // }
  )

  return a['|appkit-form-timezone'](
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
      ...options.timezoneTag
    }
  )
}
