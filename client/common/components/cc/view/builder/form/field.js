cc.control.builder.form.field = ( f, fieldSpec, params ) => {

  let a = ax.a
  let x = ax.x

  let field = {
    key: fieldSpec.key,
    value: fieldSpec.value,
    layout: fieldSpec.layout,
    help: fieldSpec.help,
    hint: fieldSpec.hint,
    layout: fieldSpec.layout,
    item: fieldSpec.item,
    static: fieldSpec.static,
    confirmation: fieldSpec.confirmation,
    dependent: fieldSpec.dependent,
    placeholder: fieldSpec.placeholder,
  }

  if ( fieldSpec.components ) {
    let componentsSpec = Object.values( fieldSpec.components || {} )
    field.form = (ff) => componentsSpec.map(
      componentSpec => cc.control.builder.form.component( ff, componentSpec, params )
    )
  }

  if ( fieldSpec.selections ) {
    let selectionsSpec = fieldSpec.selections
    if ( selectionsSpec.type == 'dynamic' && selectionsSpec.key ) {
      let match = selectionsSpec.key.match( /\[?\w+\]?/g ).map(
        part => part.match( /\w+/ )[0]
      )
      field.selections = x.lib.object.dig( params, match )
    } else {
      field.selections = Object.values( selectionsSpec.static || {} )
    }
  }

  let label = fieldSpec.label || {}
  if ( label.display == 'custom' ) {
    field.label = label.custom
  } else if ( label.display == 'none' ) {
    field.label = false
  }

  let controlTypes = {
    string: { control: 'input', type: 'text' },
    select: { control: 'select' },
    text: { control: 'textarea' },
    checkbox: { control: 'checkbox' },
    checkboxes: { control: 'checkboxes' },
    radios: { control: 'radios' },
    hidden: { control: 'input', type: 'hidden' },
    password: { control: 'password' },
    combobox: { control: 'combobox' },
    multiselect: { control: 'multiselect' },
    color: { control: 'input', type: 'color' },
    date: { control: 'input', type: 'date' },
    email: { control: 'input', type: 'email' },
    number: { control: 'input', type: 'number' },
    tel: { control: 'input', type: 'tel' },
    time: { control: 'input', type: 'time' },
    url: { control: 'input', type: 'url' },
    code: { control: 'code' },
    markdown: { control: 'markdown' },
    country: { control: 'country' },
    language: { control: 'language' },
    timezone: { control: 'timezone' },
    json: { control: 'json' },
    one: { control: 'one' },
    many: { control: 'many' },
    table: { control: 'table' },
  }

  let control = fieldSpec.control || 'string'
  let controlType = controlTypes[control]
  field.control = controlType.control
  field.type = controlType.type
  field[field.control] = fieldSpec[field.control]

  let validation = fieldSpec.validation || {}
  field.required = validation.required || undefined
  field.pattern = validation.pattern || undefined
  field.min = validation.min || undefined
  field.max = validation.max || undefined
  field.minlength = validation.minlength || undefined
  field.maxlength = validation.maxlength || undefined
  field.step = validation.step || undefined
  field.invalid = validation.message || undefined

  return f.field( field )

}
