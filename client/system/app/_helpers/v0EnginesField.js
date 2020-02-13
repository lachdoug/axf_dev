let v0EnginesField = ( variable ) => {

  let input = variable.input || {}
  let validation = input.validation || {}
  let collection = input.collection || {}

  return {
   key: variable.name,
   value: variable.value,
   as: {
     boolean: 'check',
     check_boxes: 'checks',
     checkboxes: 'checks',
     checkbox: 'check',
     checkbox_boolean: 'check',
     date: 'input/date',
     datetime: 'input/datetime',
     decimal: 'input/decimal',
     email: 'input/email',
     // file: 'input/file',
     float: 'input/number',
     hidden: 'input/hidden',
     integer: 'input/number',
     language: 'language',
     password: 'password',
     password_with_confirmation: 'password',
     radio_buttons: 'radios',
     select: 'select',
     select_multiple: 'multiselect',
     select_with_input: 'selectinput',
     string: 'input',
     time: 'input/time',
     time_zone: 'timezone',
     tel: 'input/tel',
     text: 'textarea',
     url: 'input/url',
     uuid: 'input/url',
   }[ input.type ] || input.type,
   unchecked: (
     ( input.type == 'boolean' || input.type == 'checkbox_boolean' ) && 'false'
   ),
   checked: (
     ( input.type == 'boolean' || input.type == 'checkbox_boolean' ) && 'true'
   ),
   confirmation: input.type == 'password_with_confirmation',
   label: input.label,
   required: variable.mandatory,
   pattern: validation.pattern,
   invalid: validation.message,
   comment: input.comment,
   hint: input.hint,
   placeholder: input.placeholder || ( collection.include_blank ? ' ' : '' ),
   sellections: collection.items,
  }

}
