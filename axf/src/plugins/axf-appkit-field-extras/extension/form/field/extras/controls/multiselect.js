ax.extension.form.field.extras.controls.
multiselect = function( f,  options={} ) {

  let a = ax.a
  let x = ax.x

  options.value = x.lib.form.collection.value( options.value )

  options.selections = x.lib.form.selections( options.selections )

  let controlTagOptions = {
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
      this.$('select').disabled = 'disabled'
    },

    $enable: function() {
      if ( !options.disabled ) {
        this.$$('|appkit-form-multiselect-selected-item-remove').$enable()
        this.$('select').removeAttribute('disabled')
      }
    },

    $preselect: function () {
      let items = []
      let select = this.$('select')
      let selections = Array.apply( null, select.options )

      options.value.map( (itemValue) => {

        // if ( ax.is.undefined( selections[i].value ) )
        // debugger
        selections.forEach( ( selection, i ) => {


          if ( selection.value.toString() == itemValue.toString() ) {
            items.push( {
              index: i,
              value: itemValue,
              label: selection.text,
            } )
            selection.disabled = 'disabled'
          }
        } )

      } )
      this.$('|appkit-form-multiselect-selected').$state = items
    },

    $on: {
      'axf.appkit.form.multiselect.selected.change: send control change event': (e,el) => {
        el.$send( 'axf.appkit.form.control.change' )
      },
      ...( options.controlTag || {} ).$on
    },

    ...options.controlTag

  }

  return a['|appkit-form-control'](
    a['|appkit-form-control-collection'](
      [
        this.multiselect.select( f, options ),
        this.multiselect.selected( f, options )
      ],
      { name: options.name } // Used to find control content using name without []
    ),
    controlTagOptions
  )

}
