ax.extension.form.factory.
multiselect = (f) => function( options={} ) {

  let a = ax.a
  let x = ax.x
  let form = x.form
  let lib = ax.x.lib.field

  options.name = lib.selections.name( options.name )
  options.value = lib.selections.value( options.value )
  options.selections = lib.selections.from( options.selections )

  return a['|appkit-form-multiselect'](
    [
      form.factory.multiselect.select( f, options ),
      form.factory.multiselect.selected( f, options )
    ],
    {
      $init: function() { this.$preselect(); },

      $value: function() {
        return this.$('|appkit-form-multiselect-selected').$state.
          map( function(item) { return item.value } )
      },

      $data: function() {
        return this.$value()
      },

      $focus: function () {
        this.$('select').focus()
      },

      $disable: function() {
        this.$$('|appkit-form-multiselect-selected-item-remove').$disable()
        this.$('|appkit-form-field-select-wrapper').$disable()
      },

      $enable: function() {
        if ( !options.disabled ) {
          this.$$('|appkit-form-multiselect-selected-item-remove').$enable()
          this.$('|appkit-form-field-select-wrapper').$enable()
        }
      },

      $preselect: function () {
        var items = []
        options.value.map( (itemValue) => {

          var select = this.$('select')
          var selections = select.options

          for (var i=0, n=selections.length; i<n ; i++) {
            if ( selections[i].value.toString() === itemValue.toString() ) {
              items.push( {
                index: i,
                value: itemValue,
                label: selections[i].text,
              } )
              selections[i].disabled = disabled
            }
          }

        } )
        this.$('|appkit-form-multiselect-selected').$state = items
      },

      ...options.multiselectTag

    }
  )

}
