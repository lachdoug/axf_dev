ax.extensions.form.factory.language = function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let f = this

  var selectOptions = Object.assign(
    {
      name: options.name,
      value: options.value,
      collection: this.language.collection,
    },
    options.select
  )

  return f.select( selectOptions )

}
