// options - goes to f.select with collection added

ax.extensions.form.factory.timezone = function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let f = this

  var selectOptions = Object.assign(
    {
      name: options.name,
      value: options.value,
      collection: this.timezone.collection,
    },
    options.select
    //   placeholder: options.placeholder,
    //   // required: options.required,
    //   // disabled: options.disabled,
    //   selectTag: options.selectTag || {},
    // }
  )

  return f.select( selectOptions )

}
