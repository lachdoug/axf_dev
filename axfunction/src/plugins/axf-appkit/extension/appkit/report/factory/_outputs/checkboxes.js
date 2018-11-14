ax.extension.appkit.report.factory.
checkboxes = (r) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x

  let lib = ax.x.appkit.lib.form

  let name = lib.collection.name( options.name )
  let value = lib.collection.value( options.value )
  let collection = lib.collection.from( options.collection )

  let checkboxes = collection.map( function( checkbox, i ) {

    let checkOptions = options.check
    if ( typeof checkOptions === "function" ) {
      checkOptions = checkOptions( checkbox, i )
    }

    return r.check( {
      name: name,
      value: lib.collection.includes( value, checkbox.value ) ? checkbox.value : "",
      checked: checkbox.value,
      label: checkbox.label,
      ...checkOptions
    } )

  } )

  // Add <input> for dependent value matching
  checkboxes.unshift(
    a.span( {
      name: name,
      $value: function () {
        return options.value
      },
    } )
  )

  let tag = {
    $value: function() {
      return options.value
    },

    ...options.tag
  }

  return a['appkit-report-checkboxes']( checkboxes, tag )

}
