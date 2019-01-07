ax.extension.appkit.form.factory.
select.options = function( options ) {


  let lib = ax.x.appkit.lib

  let value = lib.field.collection.value( options.value )
  let collection = lib.field.collection.from( options.collection, { value: value } )

  collection = collection.map( function( item ) {
    return ax.a.option( item.label, {
      value: item.value,
      disabled: item.disabled,
      // ...( item.label ? { $text: item.label } : {} ),
      // ...( item.html ? { $html: item.html } : {} ),
    } )
  })

  // Mark each select options as selected if in field value.
  collection = collection.map( function( option ) {
    if ( option.value && lib.field.collection.includes( value, option.value ) ) {
      option.selected = "selected"
    }
    return option
  } )

  // include blank option with any placeholder text, and select it if no other value
  if ( options.placeholder || options.placeholder === "" ) {

    let optionTag = {
      value: "",
      disabled: options.required,
      ...( value ? {} : { selected: true } )
    }

    collection.unshift(
      ax.a.option( options.placeholder, optionTag )
    )

  }

  return collection

}
