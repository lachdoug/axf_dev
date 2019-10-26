ax.extension.form.factory.
submit = ( f, options={} ) => {

  let a = ax.a

  let label = options.label || '✔ Submit'

  let buttonOptions = {
    label: label,
    type: 'submit',
    name: options.name,
    value: options.value,
    onclick: options.onclick,
    to: options.to,
    buttonTag: options.buttonTag,
    ...options.button
  }

  return f.button( buttonOptions )

}
