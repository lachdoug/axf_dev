ax.extension.
check = function( options ) {

  let a = ax.a

  let checked = options.checked || 'on'

  let inputTagOptions = {
    type: options.type || 'checkbox',
    name: options.name,
    value: options.checked,
    checked: options.value == checked ? 'checked' : undefined,
    ...options.inputTag
  }

  let labelTagOptions = {
    ...options.labelTag,
    $on: {
      'click: click input': (e,el) => {
        el.previousSibling.click()
      },
      ...( options.labelTag || {} ).$on
    },
  }

  return a['|appkit-check']( [
    a.input( inputTagOptions ),
    a.label( options.label, labelTagOptions ),
  ], options.checkTag )

}
