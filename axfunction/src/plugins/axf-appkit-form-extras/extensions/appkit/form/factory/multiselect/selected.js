ax.extension.appkit.form.factory.
multiselect.selected = function(
  f, options={}
) {

  let a = ax.a

  return a['appkit-form-multiselect-selected']( {

    $state: [],

    $remove: function ( item ) {
      state = this.$state
      var index = state.indexOf( item )
      state.splice(index, 1)
      if (index !== -1) this.$state = state
    },

    $add: function ( item, index ) {
      this.$state = [ item ].concat( this.$state )
    },

    $update: function() {

      if ( this.$state.length === 0 ) {
        this.style.display = "none"
        this.$( "^appkit-form-multiselect-selected" ).previousSibling.required = options.required
        this.$nodes = [
          f.input( {
            name: options.name,
            disabled: true,
            inputTag: { type: "hidden" },
          } )
        ]
      } else {
        this.style.display = ""
        this.$( "^appkit-form-multiselect-selected" ).
          previousSibling.removeAttribute( "required" )
        this.$nodes = this.$state.map( function( item ) {
          return a['appkit-form-multiselect-selected-item']( [
            a['appkit-form-multiselect-selected-item-label']( item.label ),
            a['appkit-form-multiselect-selected-item-remove'](
              "🗙",
              {
                $on: { 'click: remove item from selection': function(e) {
                  this.$( "^appkit-form-multiselect" ).
                    $("select").$enableDeselected( item.index )
                  this.$( "^appkit-form-multiselect-selected" ).$remove( item )
                }
              } }
            ),
            f.input( {
              name: options.name,
              required: options.required,
              value: item.value,
              inputTag: { type: "hidden" },
            } )
          ] )
        } )
      }
    },

  } )




}
