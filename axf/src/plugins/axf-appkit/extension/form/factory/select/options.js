ax.extension.form.factory.select.
options = function( options ) {

  let a = ax.a
  let x = ax.x

  let selections = options.selections || []
// debugger
  if ( ax.is.array( selections ) ) {
    selections = selections.map( function(item) {
      if ( ax.is.array( item ) ) {
        return { value: item[0], label: item[1] }
      } else if ( ax.is.object( item ) ) {
        return item
      } else {
        return { value: item, label: item }
      }
    } )
  } else {
    selections = Object.keys( selections ).map(function( key ) {
      let label = selections[key]
      return { value: key , label: label }
    } )
  }

  if ( options.placeholder ) {
    selections.unshift( { value: '', label: options.placeholder } )
  }

  return selections.map( function ( member ) {

    if ( member.label == '—————' ) {

      return a.option( member.label, { disabled: 'disabled' } )

    } else {

      let value = options.value
      let selected

      if ( ax.is.array( value ) ) {
        selected = value.some( function( value ) { return value == member.value } )
      } else {
        selected = value == member.value
      }

      return a.option( member.label, {
        value: member.value,
        selected: selected || undefined,
        ...options.optionTag,
        ...member.optionTag
      } )

    }


  } )

}
