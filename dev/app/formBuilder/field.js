app.formBuilder.field = ( f, fieldSpec, params ) => {

  let a = ax.a
  let x = ax.x

  let control = fieldSpec.control
  let field = {
    key: fieldSpec.key,
    value: fieldSpec.value,
    layout: fieldSpec.layout,
    help: fieldSpec.help,
    hint: fieldSpec.hint,
    layout: fieldSpec.layout,
    dependent: fieldSpec.dependent,
    placeholder: fieldSpec.placeholder,
  }

  if ( fieldSpec.components ) {
    let componentsSpec = Object.values( fieldSpec.components || {} )
    field.form = (ff) => componentsSpec.map(
      componentSpec => {
        return app.formBuilder.component( ff, componentSpec, params )
      }
    )
  }

  if ( fieldSpec.selections ) {
    let selectionsSpec = fieldSpec.selections
    if ( selectionsSpec.type == 'dynamic' && selectionsSpec.scope ) {
      let match = selectionsSpec.scope.match( /\[?\w+\]?/g ).map( part => part.match( /\w+/ )[0]  )
      field.selections = x.lib.object.dig( params, match )
    } else {
      field.selections = Object.values( selectionsSpec.static || {} )
    }
  }

  if ( fieldSpec.label.display == 'custom' ) {
    field.label = fieldSpec.label.custom
  } else if ( fieldSpec.label.display == 'none' ) {
    field.label = false
  }

  // let controls = {
  //   input: 'input',
  //   select: 'select',
  //   check: 'check',
  //   checks: 'checks',
  //   radios: 'radios',
  //   text: 'textarea',
  //   code: 'code',
  //   markdown: 'markdown',
  //   // color: 'input/color',
  //   // date: 'input/date',
  //   // email: 'input/email',
  //   // number: 'input/number',
  //   // tel: 'input/tel',
  //   // time: 'input/time',
  //   // url: 'input/url',
  //   language: 'language',
  //   country: 'country',
  //   timezone: 'timezone',
  //   password: 'password',
  //   multiselect: 'multiselect',
  //   combobox: 'selectwithinput',
  //   one: 'one',
  //   many: 'many',
  //   table: 'table',
  //   json: 'json',
  // }

  if ( control == 'combobox' ) {
    field.control = 'selectwithinput'
  } else {
    field.control = control
  }

  field[control] = fieldSpec[control]
  // field.check = fieldSpec.check

  field.item = fieldSpec.item
  field.type = fieldSpec.type


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
