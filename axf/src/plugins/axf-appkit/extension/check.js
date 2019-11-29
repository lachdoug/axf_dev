ax.extension.
check = function( options ) {

  let a = ax.a
  let x = ax.x

  let checked = options.checked || 'on'

  let inputId
  if ( ( options.inputTag || {} ).id ) {
    inputId = options.inputTag.id
  } else {
    inputId = x.lib.uuid.generate()
  }

  let inputTagOptions = {
    type: options.type || 'checkbox',
    name: options.name,
    value: options.checked,
    required: options.required,
    readonly: options.readonly,
    checked: options.value == checked ? 'checked' : undefined,
    ...options.inputTag,
    id: inputId
  }
// debugger
  let labelTagOptions = {
    for: inputId,
    ...options.labelTag,
    // $on: {
    //   'click: click input': (e,el) => {
    //     el.previousSibling.click()
    //   },
    //   ...( options.labelTag || {} ).$on
    // },
  }

  return a['|appkit-check']( [
    a.input( inputTagOptions ),
    a.label( options.label, labelTagOptions ),
  ], options.checkTag )

}
