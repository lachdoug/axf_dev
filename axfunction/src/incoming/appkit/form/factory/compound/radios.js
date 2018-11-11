ax.extensions.form.factory.radios = function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let f = this

  options.value = ax.extensions.appkit.lib.fieldValueForCollection( options.value )
  options.collection = ax.extensions.appkit.lib.fieldCollectionFrom( options.collection )

  let axRadiosComponents = options.collection.map( function( radio, i ) {

    let checkInputOptions = Object.assign(
      {
        name: options.name,
        type: 'radio',
        value: x.appkit.lib.arrayIncludes( options.value, radio[0] ) ? radio[0] : "",
        checked: radio[0],
        inputTag: {
          $value: function () {
            return this.closest('radios').$value()
          }
        }
      },
      options.check
    )

    let check = f.check( checkInputOptions )

    let labelTag = Object.assign(
      { onclick: function () { this.previousSibling.click() } },
      options.labelTag
    )

    let label = a.label( radio[1], labelTag )

    return a['.radio']( [ check, label ], options.axRadioTag )

  } )

  let axRadiosTag = Object.assign(
    {
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
    },
    options.axRadiosTag
  )

  return a['.radios']( axRadiosComponents, axRadiosTag )

}
