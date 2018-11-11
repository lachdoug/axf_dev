ax.extensions.form.factory.country = function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let f = this

  var selectOptions = Object.assign(
    {
      name: options.name,
      value: options.value,
      collection: this.country.collection,
    },
    options.select
  )

  return f.select( selectOptions )

}
