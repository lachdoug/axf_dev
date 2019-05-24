ax.extension.appkit.form.factory.
checkboxes = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x

  let lib = ax.x.appkit.lib.field

  let name = lib.collection.name( options.name )
  let value = lib.collection.value( options.value )
  let collection = lib.collection.from( options.collection )

  let checkboxes = collection.map( function( checkbox, i ) {

    let checkOptions = options.check
    if ( ax.type.is.function( checkOptions ) ) {
      checkOptions = checkOptions( checkbox, i )
    }

    return f.check( {
      name: name,
      value: lib.collection.includes( value, checkbox.value ) ? checkbox.value : "",
      disabled: options.disabled || checkbox.disabled,
      readonly: options.readonly || checkbox.readonly,
      datatype: options.datatype,
      checked: checkbox.value,
      label: checkbox.label,
      // inputTag: {
      //   $value: function () {
      //     return this.$('^appkit-form-checkboxes').$value()
      //   },
      //   $data: function () {
      //     return this.$('^appkit-form-checkboxes').$data()
      //   },
      // },
      ...checkOptions
    } )

  } )

  // Add <input> for dependent value matching
  checkboxes.unshift(
    f.input( {
      name: name,
      type: "hidden",
      disabled: true,
      inputTag: {
        $value: function () {
          return this.$('^appkit-form-checkboxes').$value()
        },
        $data: function () {
          debugger
          return this.$('^appkit-form-checkboxes').$data()
        },
      },
    } )
  )

  let checkboxesTag = {
    $data: function() {
      debugger
      return this.$$('input:checked').$data()
      // let values =
      // debugger
      // if ( options.datatype ) {
      //   values = values.map( function( value ) {
      //     return ax.x.appkit.lib.coerce[ options.datatype ]( value )
      //   } )
      // }
      // return values
    },
    $value: function() {
      return this.$data.join(' ')
    },
    $focus: function () {
      this.$('input').focus()
    },
    $disable: function() {
      this.querySelectorAll('input').
        forEach( function( check ) { check.$disable() } )
    },
    $enable: function() {
      if ( !options.disabled ) this.querySelectorAll('input').
        forEach( function( check ) { check.$enable() } )
    },
    ...options.checkboxesTag
  }

  return a['appkit-form-checkboxes']( checkboxes, checkboxesTag )

}
