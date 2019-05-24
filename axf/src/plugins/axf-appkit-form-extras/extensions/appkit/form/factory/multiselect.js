ax.extension.appkit.form.factory.
multiselect = (f) => function( options={} ) {

  let a = ax.a
  let x = ax.x
  let form = x.appkit.form
  let lib = ax.x.appkit.lib.field

  options.name = lib.collection.name( options.name )
  options.value = lib.collection.value( options.value )
  options.collection = lib.collection.from( options.collection )

  return a['appkit-form-multiselect'](
    [
      form.factory.multiselect.select( f, options ),
      form.factory.multiselect.selected( f, options )
    ],
    {
      $init: function() { this.$preselect(); },

      $value: function() {
        return this.$('appkit-form-multiselect-selected').$state().
          map( function(item) { return item.value } )
      },

      $focus: function () {
        this.$('select').focus()
      },

      $disable: function() {
        this.$$('input').$disable()
      },

      $enable: function() {
        if ( !options.disabled ) this.$$('input').$enable()
      },

      $preselect: function () {
        var items = []
        options.value.map( (itemValue) => {

          var select = this.$("select")
          var selections = select.options

          for (var i=0, n=selections.length; i<n ; i++) {
            if ( selections[i].value.toString() === itemValue.toString() ) {
              items.push( {
                index: i,
                value: itemValue,
                label: selections[i].text,
              } )
              selections[i].disabled = "disabled"
            }
          }

        } )
        this.$("appkit-form-multiselect-selected").$state = items
      },

      ...options.multiselectTag

    }
  )

}
