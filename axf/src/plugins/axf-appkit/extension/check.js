ax.extension.
check = function( options ) {

  let a = ax.a
  let x = ax.x

//   let checked
// debugger
//   if ( options.checked ) {
//     checked = options.value == checked ? 'checked' : undefined
//   } else {
//     checked = options.value ? 'checked' : undefined
//   }

  let inputId
  if ( ( options.inputTag || {} ).id ) {
    inputId = options.inputTag.id
  } else {
    inputId = x.lib.uuid.generate()
  }

  let inputTagOptions = {
    type: options.type || 'checkbox',
    name: options.name,
    value: options.checked || 'on',
    required: options.required,
    onclick: options.readonly ? 'return false' : 'return true',
    checked: options.value ? 'checked' : undefined,
    ...options.inputTag,
    id: inputId
  }

  let labelTagOptions = {
    for: inputId,
    ...options.labelTag,
  }

  return a['|appkit-check']( [
    a.input( null, inputTagOptions ),
    a.label( options.label, labelTagOptions ),
  ], options.checkTag )

}
