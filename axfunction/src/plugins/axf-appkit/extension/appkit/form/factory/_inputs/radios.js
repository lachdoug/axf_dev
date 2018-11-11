ax.extension.appkit.form.factory.
radios = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let f = this
  let lib = ax.x.appkit.lib.form

  let collection = lib.collection.from( options.collection )

  let radios = collection.map( function( radio, i ) {

    let checkOptions = options.check
    if ( typeof checkOptions === "function" ) {
      checkOptions = checkOptions( checkbox, i )
    }

    return f.check( {
      name: options.name,
      type: 'radio',
      value: options.value === radio.value ? radio.value : "",
      checked: radio.value,
      label: radio.label,
      inputTag: {
        $value: function () {
          return this.closest('appkit-form-radios').$value()
        }
      },
      ...checkOptions
    } )

  } )

  let radiosTag = {
    $value: function() {
      let checked = this.$('input:checked')[0]
      return checked ? checked.value : ''
    },
    $focus: function () {
      this.$('input')[0].focus()
    },
    $disable: function() {
      this.querySelectorAll('input').
        forEach( function( check ) { check.$disable() } )
    },
    $enable: function() {
      if ( !options.disabled ) this.querySelectorAll('input').
        forEach( function( check ) { check.$enable() } )
    },
    ...options.radiosTag
  }

  return a['appkit-form-radios']( radios, radiosTag )

}
