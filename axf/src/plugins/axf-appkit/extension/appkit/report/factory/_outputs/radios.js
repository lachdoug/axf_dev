ax.extension.appkit.report.factory.
radios = (r) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let lib = ax.x.appkit.lib.field

  let collection = lib.collection.from( options.collection )

  let radios = collection.map( function( radio, i ) {

    let checkOptions = options.check
    if ( ax.type.is.function( checkOptions ) ) {
      checkOptions = checkOptions( checkbox, i )
    }

    return r.check( {
      name: options.name,
      type: 'radio',
      value: options.value === radio.value ? radio.value : "",
      checked: radio.value,
      label: radio.label,
      inputTag: {
        $value: function () {
          return this.$('^appkit-report-radios').$value()
        }
      },
      ...checkOptions
    } )

  } )

  let radiosTag = {
    $value: function() {
      let checked = this.$('input:checked')
      return checked ? checked.value : ''
    },
    ...options.radiosTag
  }

  return a['appkit-report-radios']( radios, radiosTag )

}
