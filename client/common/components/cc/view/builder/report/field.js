cc.view.builder.report.field = ( r, fieldSpec, params ) => {

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
    confirmation: fieldSpec.confirmation,
    dependent: fieldSpec.dependent,
    placeholder: fieldSpec.placeholder,
  }

  if ( fieldSpec.components ) {
    let componentsSpec = Object.values( fieldSpec.components || {} )
    field.report = (rr) => componentsSpec.map(
      componentSpec => cc.view.builder.report.
        component( rr, componentSpec, params )
    )
  }

  if ( fieldSpec.selections ) {
    let selectionsSpec = fieldSpec.selections
    if ( selectionsSpec.type == 'dynamic' && selectionsSpec.scope ) {
      let match = selectionsSpec.scope.match( /\[?\w+\]?/g ).map(
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
    string: { control: 'output' },
    text: { control: 'textarea' },
    preformatted: { control: 'preformatted' },
    select: { control: 'select' },
    boolean: { control: 'boolean' },
    checkbox: { control: 'checkbox' },
    checkboxes: { control: 'checkboxes' },
    radios: { control: 'radios' },
    password: { control: 'password' },
    color: { control: 'color' },
    datetime: { control: 'datetime' },
    email: { control: 'email' },
    number: { control: 'number' },
    tel: { control: 'tel' },
    url: { control: 'url' },
    json: { control: 'json' },
    output: { control: 'output' },
    country: { control: 'country' },
    language: { control: 'language' },
    timezone: { control: 'timezone' },
    markdown: { control: 'markdown' },
    code: { control: 'code' },
    one: { control: 'one' },
    many: { control: 'many' },
    table: { control: 'table' },
  }

  let control = fieldSpec.control || 'string'
  let controlType = controlTypes[control]
  field.control = controlType.control
  field[field.control] = fieldSpec[field.control]

  return r.field( field )

}
