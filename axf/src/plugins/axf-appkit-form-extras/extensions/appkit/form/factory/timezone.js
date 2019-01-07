// options - goes to f.select with collection added

ax.extension.appkit.form.factory.timezone = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  // let f = this
  let timezone = ax.extension.appkit.form.factory.timezone

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

      collection: timezone.collection,
    },
    options.select
    //   placeholder: options.placeholder,
    //   // required: options.required,
    //   // disabled: options.disabled,
    //   selectTag: options.selectTag || {},
    // }
  )

  return a['appkit-form-timezone'](
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
      ...options.timezoneTag
    }
  )
}
