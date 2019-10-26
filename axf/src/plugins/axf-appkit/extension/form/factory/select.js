ax.extension.form.factory.
select = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let selectTagOptions = {
    name: options.name,
    value: options.value,
    required: options.required,
    ...options.selectTag
  }

  return a.select( this.select.options( options ), selectTagOptions )

}
