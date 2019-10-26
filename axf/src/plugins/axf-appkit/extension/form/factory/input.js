ax.extension.form.factory.
input = function( options={} ) {

  let a = ax.a

  let inputTagOptions = {
    name: options.name,
    value: options.value,
    type: options.type,
    required: options.required,
    pattern: options.pattern,
    placeholder: options.placeholder,
    ...options.inputTag
  }

  return a.input( inputTagOptions )

}
