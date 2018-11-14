ax.extensions.form.factory.checkboxes = function(
  options={}
) {

  let a = ax.a;
  let x = ax.x;
  let f = this;
  let lib = ax.extensions.appkit.lib

  options.name = lib.fieldNameForCollection( options.name );
  options.value = lib.fieldValueForCollection( options.value );
  options.collection = lib.fieldCollectionFrom( options.collection );

  let axCheckboxesComponents = options.collection.map( function( checkbox, i ) {

    let checkOptions = Object.assign(
      {
        name: options.name,
        value: x.appkit.lib.arrayIncludes( options.value, checkbox[0] ) ? checkbox[0] : "",
        checked: checkbox[0],
        inputTag: {
          $value: function () {
            return this.closest('checkboxes').$value()
          }
        }
      },
      options.check
    )

    var check = f.check( checkOptions );

    let labelTag = Object.assign(
      { onclick: function () { this.previousSibling.click() } },
      options.labelTag
    )

    let label = a.label( checkbox[1], labelTag )

    return a['.checkbox']( [ check, label ], options.axCheckboxTag )

  } );

  let axCheckboxesTag = Object.assign(
    {
      $value: function() {
        return this.querySelectorAll('input:checked').map(
          function( option ) {
            return option.value
          }
        )
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
    options.axCheckboxesTag
  )

  return a['.checkboxes']( axCheckboxesComponents, axCheckboxesTag );

};
